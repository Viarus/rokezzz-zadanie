import { Component, Input } from '@angular/core';
import { RevealOnScroll } from '../reveal-on-scroll';

@Component({
  selector: 'app-photo-with-description',
  imports: [RevealOnScroll],
  templateUrl: './photo-with-description.html',
  styleUrl: './photo-with-description.scss',
})
export class PhotoWithDescription {
  @Input({ required: true }) theme!: 'dark' | 'light';
  @Input({ required: true }) descriptionPosition!: 'left' | 'right';
  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;
}
