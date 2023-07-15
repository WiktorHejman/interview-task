import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForm } from '../models/user';

@Injectable()
export class UserFormService {
  readonly form = new FormGroup<UserForm>({
    name: new FormControl('', {
      validators: [Validators.pattern(/^[a-zA-Z\s]*$/), Validators.required],
      nonNullable: true,
    }),
    username: new FormControl('', {
      validators: Validators.email,
      nonNullable: true,
    }),
    country: new FormControl(undefined, {
      validators: Validators.required,
      nonNullable: true,
    }),
    postCode: new FormControl('', { nonNullable: true }),
    favouriteMovie: new FormControl('', { nonNullable: true }),
  });
}
