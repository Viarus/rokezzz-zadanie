import { Component } from '@angular/core';
import { PhotoWithDescription } from '../../shared/photo-with-description/photo-with-description';

@Component({
  selector: 'app-home-page',
  imports: [PhotoWithDescription],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
