import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

@Component({
  selector: 'app-transformations',
  imports: [MatIconModule, RevealOnScroll],
  templateUrl: './transformations.html',
  styleUrl: './transformations.scss',
})
export class Transformations {}
