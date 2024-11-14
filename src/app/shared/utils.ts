import { Observable, distinctUntilChanged, map, shareReplay } from 'rxjs';

/**
 * Mapper function
 * accepts T and returns R
 */
type Mapper<T, R> = (mappable: T) => R;

/**
 * Memoizable comparator function
 */
type Memoizable<R> = (previous: R, current: R) => boolean;

/**
 * Default memoizable function, which uses naiveObjectComparison
 * Indicates if we can use the previous value e.g if false, then previous is different from current
 * @param previous Previous value
 * @param current Current value
 * @returns True if the values match
 * @see naiveObjectComparison
 */
const defaultMemoizable = <R>(previous: R, current: R) => {
  if (typeof previous === 'object' && typeof current === 'object') {
    return naiveObjectComparison(previous, current);
  }
  return previous === current;
};

/**
 * Freezes an object and all of its child objects recursively
 * @param inObject Object to freeze
 * @returns Frozen object
 * @see object.freeze
 */
export const deepFreeze = <T extends object>(inObject: T) => {
  Object.freeze(inObject);
  for (const [key, value] of Object.entries(inObject)) {
    if (
      Object.prototype.hasOwnProperty.call(inObject, key) &&
      value != undefined &&
      typeof value === 'object' &&
      !Object.isFrozen(value)
    ) {
      deepFreeze(value);
    }
  }
  return inObject;
};

/**
 * Determines whether two objects have the same property values
 * @param object1 Object 1
 * @param object2 Object 2
 * @returns True if they are naively the same
 */
export const naiveObjectComparison: <T>(object1: T, object2: T) => boolean = (object1, object2) =>
  JSON.stringify(object1) === JSON.stringify(object2);

/**
 * Selector which maps the source using the given mapper, memoizes the result using the given function (or default) and returning the mapped observable
 * @param source$ Source observable
 * @param mapper Map<T, R> function that accepts source T and returns R
 * @param memoizable Memoizable function (optional)
 * @returns Mapped observable
 */
export const select$ = <T, R>(
  source$: Observable<T>,
  mapper: Mapper<T, R>,
  memoizable: Memoizable<R> = defaultMemoizable<R>,
) => source$.pipe(map(mapper), distinctUntilChanged(memoizable), shareReplay(1));
