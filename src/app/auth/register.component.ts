import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {catchError, EMPTY, map, Observable, of, tap} from "rxjs";
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {AuthenticationService} from "./auth.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, AsyncPipe],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent implements OnInit {
  form!: FormGroup;
  error$: Observable<string> = EMPTY;
  submitted = false;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  attemptRegister(): void {
    this.submitted = true;
    if (this.form.valid) {
      const user$ = this.authService.register({ ...this.form.value});
      this.error$ = user$.pipe(
        catchError(error => {
          return of('User registration error');
        }),
        tap(result => {
          if (typeof result !== 'string') {
            this.router.navigate(['/login']);
          }
        }),
        map(result => result as string),
      );
      this.error$.subscribe();
    }
  }
}
