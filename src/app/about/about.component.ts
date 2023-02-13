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
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 2, content: '<b>Card content!</b>' },
          { title: 'Card 2', cols: 2, rows: 2, content: '<b>Card content!</b>' },
        ];
      }

      return [
        { title: 'Card 1', cols: 3, rows: 2, content: '<b>Card content!</b>' },
        { title: 'Card 2', cols: 1, rows: 2, content: '<b>Card content!</b>' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
