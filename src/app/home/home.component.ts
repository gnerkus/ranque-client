import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
    imports: [
        NgOptimizedImage,
        SharedModule
    ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {

}
