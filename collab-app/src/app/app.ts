import { Component, signal } from '@angular/core';
import { Davidcomp } from './feature/feature2/davidcomp/davidcomp';

@Component({
  selector: 'app-root',
  imports: [Davidcomp],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('collab-app');
}
