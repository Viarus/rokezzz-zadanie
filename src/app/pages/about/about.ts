import { Component } from '@angular/core';
import { PhotoWithDescription } from '../../shared/photo-with-description/photo-with-description';

@Component({
  selector: 'app-about',
  imports: [PhotoWithDescription],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
