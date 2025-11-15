import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-started-button',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './get-started-button.html',
  styleUrl: './get-started-button.scss',
})
export class GetStartedButton {}
