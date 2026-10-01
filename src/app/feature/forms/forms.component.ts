import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const imports = [RouterOutlet];

@Component({
  selector: 'ng-forms',
  template: `
    <!-- TODO: Tutaj linki formularzy -->
    <router-outlet />
  `,
  imports,
})
export class FormsComponent {}
