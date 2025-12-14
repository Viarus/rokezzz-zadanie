import { Component } from '@angular/core';
import { imgElement, photoPathBuilder } from '../../shared/utilities';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly gallery: imgElement[] = [
    {
      ngSrc: photoPathBuilder('uczen1'),
      alt: 'Andrzej Muskuł uczy nowicjusza',
      width: '800',
      height: '800',
    },
    {
      ngSrc: photoPathBuilder('joga'),
      alt: 'Andrzej Muskuł prowadzi jogę',
      width: '700',
      height: '700',
    },
    {
      ngSrc: photoPathBuilder('klata'),
      alt: 'Andrzej Muskuł ćwiczy klatę',
      width: '700',
      height: '700',
    },
    {
      ngSrc: photoPathBuilder('nogi'),
      alt: 'Andrzej Muskuł ćwiczy nogi',
      width: '700',
      height: '700',
    },
    {
      ngSrc: photoPathBuilder('piwo'),
      alt: 'Andrzej Muskuł pije piwo',
      width: '700',
      height: '700',
    },
    {
      ngSrc: photoPathBuilder('przysiad'),
      alt: 'Andrzej Muskuł robi przysiad',
      width: '700',
      height: '700',
    },
    {
      ngSrc: photoPathBuilder('uczen2'),
      alt: 'Andrzej Muskuł uczy nowicjusza',
      width: '800',
      height: '800',
    },
    {
      ngSrc: photoPathBuilder('uczen-przysiady'),
      alt: 'Andrzej Muskuł uczy przysiadu',
      width: '700',
      height: '700',
    },
    {
      ngSrc: photoPathBuilder('uczen-hantle'),
      alt: 'Andrzej Muskuł uczy hantli',
      width: '700',
      height: '700',
    },
  ];
}
