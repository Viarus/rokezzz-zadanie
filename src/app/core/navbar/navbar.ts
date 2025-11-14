import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private router = inject(Router);
  protected isOpen = false;

  constructor() {
    toObservable(this.router.currentNavigation)
      .pipe(takeUntilDestroyed())
      .subscribe(() => (this.isOpen = false));
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
