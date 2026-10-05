import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { AppPath } from '@ng-core/enum';

const imports = [MatListModule, RouterModule, TitleCasePipe];

@Component({
  selector: 'ng-links',
  template: `
    <mat-nav-list>
      @for (link of fragments; track link) {
        <a
          mat-list-item
          routerLinkActive
          #routerLinkActive="routerLinkActive"
          [routerLink]="link"
          [activated]="routerLinkActive.isActive"
          [routerLinkActiveOptions]="{ exact: false }">
          {{ link | titlecase }}
        </a>
      }
    </mat-nav-list>
  `,
  imports,
})
export class LinksComponent {
  readonly fragments = [AppPath.FORMS];
}
