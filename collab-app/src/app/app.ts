import { Component, signal } from '@angular/core';
import { Davidcomp } from './feature/feature2/davidcomp/davidcomp';
import { GvnComp } from './feature/feature3/gvncomp/gvncomp';
import { Anicomp } from './feature/feature1/anicomp/component/anicomp';

@Component({
  selector: 'app-root',
  imports: [Davidcomp, GvnComp,Anicomp],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('collab-app');
}
