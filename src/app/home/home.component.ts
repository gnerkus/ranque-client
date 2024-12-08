import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    NgOptimizedImage
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent {

}
