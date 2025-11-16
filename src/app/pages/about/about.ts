import { Component } from '@angular/core';
import { PhotoWithDescription } from '../../shared/photo-with-description/photo-with-description';
import { GetStartedButton } from '../../shared/get-started-button/get-started-button';

@Component({
  selector: 'app-about',
  imports: [PhotoWithDescription, GetStartedButton],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
