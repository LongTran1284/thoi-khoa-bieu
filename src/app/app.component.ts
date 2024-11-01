import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './pages/base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BaseComponent],
  template: `
    <app-base></app-base>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'thoikhoabieu';
}
