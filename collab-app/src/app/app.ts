import { Component, signal } from '@angular/core';
import { Anicomp } from './feature/feature1/anicomp/component/anicomp';

@Component({
  selector: 'app-root',
  imports: [Anicomp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('collab-app');
}
