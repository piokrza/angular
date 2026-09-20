import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ThemeService } from '@ng-ui/layout/service';

const imports = [MatButtonModule, MatIconModule];

@Component({
  selector: 'ng-theme-toggler',
  template: `
    <button matIconButton (click)="toggleTheme()">
      <mat-icon> {{ (theme() === 'light' ? 'dark' : 'light') + '_mode' }}</mat-icon>
    </button>
  `,
  imports,
})
export class ThemeTogglerComponent {
  readonly #themeService = inject(ThemeService);

  readonly theme = this.#themeService.theme;

  toggleTheme() {
    this.#themeService.toggle();
  }
}
