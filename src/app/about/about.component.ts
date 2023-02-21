import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SafeHtml } from '@angular/platform-browser';

export interface CardInfo {
  cols: number;
  rows: number;
  title: string;
  content: SafeHtml;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      let isHandset : boolean = matches;

      let cardContent: CardInfo[] = [
        {
          title: 'About Me',
          cols: isHandset ? 4 : 3,
          rows: 1,
          content: `<b>Card content!</b>`
        },
        {
          title: 'My Experience',
          cols: isHandset ? 4 : 1,
          rows: 1,
          content: `<ul>
                      <li>Card Content</li>
                      <li>Card content!</li>
                      <li>Card content!</li>
                    </ul>`
        }
      ]
      return cardContent;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
