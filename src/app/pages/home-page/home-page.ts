import { Component } from '@angular/core';
import { PhotoWithDescription } from '../../shared/photo-with-description/photo-with-description';
import { GetStartedButton } from '../../shared/get-started-button/get-started-button';

@Component({
  selector: 'app-home-page',
  imports: [PhotoWithDescription, GetStartedButton],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
