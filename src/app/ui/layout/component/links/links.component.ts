import { TitleCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

import { AppPath } from '@ng-core/enum';

const imports = [MatListModule, RouterLink, TitleCasePipe];

@Component({
  selector: 'ng-links',
  template: `
    <mat-nav-list>
      @for (link of fragments; track link) {
        <a mat-list-item [routerLink]="link" (click)="activeLink.set(link)" [activated]="activeLink() === link">
          {{ link | titlecase }}
        </a>
      }
    </mat-nav-list>
  `,
  imports,
})
export class LinksComponent {
  readonly fragments = [AppPath.FORMS];
  readonly activeLink = signal<string | null>(null);
}
