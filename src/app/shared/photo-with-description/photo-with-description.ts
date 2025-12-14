import { Component, Input } from '@angular/core';
import { RevealOnScroll } from '../reveal-on-scroll';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-photo-with-description',
  imports: [RevealOnScroll, NgOptimizedImage],
  templateUrl: './photo-with-description.html',
  styleUrl: './photo-with-description.scss',
})
export class PhotoWithDescription {
  @Input({ required: true }) theme!: 'dark' | 'light';
  @Input({ required: true }) descriptionPosition!: 'left' | 'right';
  @Input({ required: true }) ngSrc!: string;
  @Input({ required: true }) width!: string;
  @Input({ required: true }) height!: string;
  @Input({ required: true }) alt!: string;
}
