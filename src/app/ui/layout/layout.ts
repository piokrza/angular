import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { LinksComponent } from '@ng-ui/layout/component/links';
import { ThemeTogglerComponent } from '@ng-ui/layout/component/theme-toggler';

const imports = [MatButtonModule, RouterOutlet, MatSidenavModule, LinksComponent, MatToolbarModule, MatIcon, ThemeTogglerComponent];

@Component({
  selector: 'ng-layout',
  template: `
    <mat-toolbar>
      <button matIconButton aria-label="Menu button">
        <mat-icon>menu</mat-icon>
      </button>
      <span>Angular</span>
      <span class="flex-auto"></span>
      <ng-theme-toggler />
    </mat-toolbar>

    <mat-drawer-container class="grow">
      <mat-drawer opened mode="side">
        <div class="border-r-2 h-full">
          <ng-links />
        </div>
      </mat-drawer>
      <mat-drawer-content>
        <main class="h-full p-4">
          <router-outlet />
        </main>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrl: './layout.css',
  imports,
})
export class Layout {}
