import {Component, OnInit} from "@angular/core";
import {AuthUser} from "../shared/models/user";
import {StateService} from "../shared/state/state.service";
import {Observable} from "rxjs";
import {SharedModule} from "../shared/shared.module";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    SharedModule,
    NgOptimizedImage,
    NgIf,
    AsyncPipe
  ]
})

export class HeaderComponent implements OnInit {
  currentUser: Observable<AuthUser | undefined>

  constructor(
    private readonly stateService: StateService
  ) {
    this.currentUser = this.stateService.user$;
  }

  ngOnInit() {

  }
}
