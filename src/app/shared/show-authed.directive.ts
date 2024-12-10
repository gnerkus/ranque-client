import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {StateService} from "./services/state/state.service";

@Directive({ selector: '[appShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private readonly  stateService: StateService
  ) {}

  condition: boolean = false;

  ngOnInit() {
    // TODO: use the user's authenticated state to also determine if the view should be displayed
    if (this.condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  @Input() set appShowAuthed(condition: boolean) {
    const authUser = this.stateService.user$;
    this.condition = condition === !!authUser;
  }

}
