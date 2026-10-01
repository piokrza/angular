import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const imports = [MatButtonModule, MatInputModule, ReactiveFormsModule, MatSelectModule];

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
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
