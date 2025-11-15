import { Component } from '@angular/core';
import { PhotoWithDescription } from '../../shared/photo-with-description/photo-with-description';
import { GetStartedButton } from '../../shared/get-started-button/get-started-button';
import { ContactForm } from '../../shared/contact-form/contact-form';

@Component({
  selector: 'app-home-page',
  imports: [PhotoWithDescription, GetStartedButton, ContactForm],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
