import {Component, OnInit} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {EMPTY, Observable} from "rxjs";
import {UrlSegment, Params, Router, RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";

/**
 * Navigation from-page information so app. can navigate user back to where they came from
 */
type FromPage = {
  url: UrlSegment[];
  queryParams: Params;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule, AsyncPipe],
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    form!: FormGroup;
    error$: Observable<string> = EMPTY;
    submitted = false;

    constructor(
      private readonly router: Router,
      private readonly formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
        });
    }

    attemptLogin(): void {
      this.submitted = true;
    }


}
