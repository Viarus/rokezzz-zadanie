import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

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
    phone: new FormControl('', [Validators.minLength(6)]),
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

    if (control.errors['minlength']) {
      return `Niepoprawny numer telefonu`;
    }

    if (control.errors['email']) {
      return 'Niepoprawny adres email';
    }

    return null;
  }
}
