import { Service, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Service()
export class ThemeService {
  constructor() {
    this.applyTheme(this.theme());
  }

  readonly theme = signal<Theme>(this.initialTheme);

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.applyTheme(theme);

    localStorage.setItem('theme', theme);
  }

  private get initialTheme(): Theme {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark');
  }
}
