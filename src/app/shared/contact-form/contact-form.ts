import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

const phoneNumberRegex: RegExp =
  /(?:(?:\+|00)?48|\(\+?48\))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/;

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, MatButton],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.pattern(phoneNumberRegex)]),
  });

  protected onSubmit() {
    console.log(this.form.value);
  }

  getError(control: FormControl) {
    if (!control.errors || !control.touched) {
      return null;
    }

    if (control.errors['required']) {
      return 'Pole wymagane';
    }

    if (control.errors['pattern']) {
      return `Niepoprawny numer telefonu`;
    }

    if (control.errors['email']) {
      return 'Niepoprawny adres email';
    }

    return null;
  }
}
