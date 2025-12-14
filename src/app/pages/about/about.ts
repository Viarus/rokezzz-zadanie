import { Component } from '@angular/core';
import { PhotoWithDescription } from '../../shared/photo-with-description/photo-with-description';
import { GetStartedButton } from '../../shared/get-started-button/get-started-button';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [PhotoWithDescription, GetStartedButton, RevealOnScroll, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
