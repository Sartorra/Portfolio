import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  public ngOnInit(): void {
    this.invokeParticles();
  }

  private invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, ()=>{});
  }
}
