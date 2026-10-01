import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const imports = [MatButtonModule, MatInputModule, ReactiveFormsModule];

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['../../common-page.scss', '../../common-form.scss', './reactive-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class ReactiveFormsComponent {
  get years() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 40))
      .fill('')
      .map((_, idx) => now - idx);
  }
}
