import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public ngOnInit(): void {
      this.invokeParticles();
  }

  private invokeParticles(): void {
      particlesJS('particles-js', ParticlesConfig, ()=>{});
  }
}
