﻿import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {

}
