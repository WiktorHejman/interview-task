import { FormControl } from '@angular/forms';

export interface User {
  name: string;
  username?: string;
  country?: Country;
  postCode?: string;
  favouriteMovie?: string;
}

export interface UserForm {
  name: FormControl<string>;
  username: FormControl<string>;
  country: FormControl<Country | undefined>;
  postCode: FormControl<string>;
  favouriteMovie: FormControl<string>;
}

export enum Country {
  UnitedKingdom = 'United Kingdom',
  Ireland = 'Ireland',
}
