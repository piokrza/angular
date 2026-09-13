import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const imports = [RouterOutlet];

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  styleUrl: './app.css',
  imports,
})
export class App {
  protected readonly title = signal('angular');
}
