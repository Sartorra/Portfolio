import { Component } from '@angular/core';
import { fadeInText } from '../animations/fadeIn';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  animations: [
    fadeInText
  ]
})
export class IntroductionComponent {
}
