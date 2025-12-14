import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-transformations',
  imports: [MatIconModule, RevealOnScroll, NgOptimizedImage],
  templateUrl: './transformations.html',
  styleUrl: './transformations.scss',
})
export class Transformations {}
