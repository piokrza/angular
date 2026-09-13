import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const imports = [RouterOutlet];

@Component({
  selector: 'ng-layout',
  template: `
    <h1>Lyout</h1>
    <header>Tooltip here</header>
    <router-outlet />
  `,
  imports,
})
export class Layout {}
