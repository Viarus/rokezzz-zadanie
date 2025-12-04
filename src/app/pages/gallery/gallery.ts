import { Component } from '@angular/core';
import { imgElement, photoPathBuilder } from '../../shared/utilities';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly gallery: imgElement[] = [
    { src: photoPathBuilder('uczen1'), alt: 'Andrzej Muskuł uczy nowicjusza' },
    { src: photoPathBuilder('joga'), alt: 'Andrzej Muskuł prowadzi jogę' },
    { src: photoPathBuilder('klata'), alt: 'Andrzej Muskuł ćwiczy klatę' },
    { src: photoPathBuilder('nogi'), alt: 'Andrzej Muskuł ćwiczy nogi' },
    { src: photoPathBuilder('piwo'), alt: 'Andrzej Muskuł pije piwo' },
    { src: photoPathBuilder('przysiad'), alt: 'Andrzej Muskuł robi przysiad' },
    { src: photoPathBuilder('uczen2'), alt: 'Andrzej Muskuł uczy nowicjusza' },
    { src: photoPathBuilder('uczen-przysiady'), alt: 'Andrzej Muskuł uczy przysiadu' },
    { src: photoPathBuilder('uczen-hantle'), alt: 'Andrzej Muskuł uczy hantli' },
  ];
}
