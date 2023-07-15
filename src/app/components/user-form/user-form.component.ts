import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { tap } from "rxjs";
import { Country } from "src/app/models/user";
import { UserFormService } from "src/app/services/user-form.service";
import { FormInputComponent } from "../form-input/form-input.component";
import { MovieAutocompleteFormFieldComponent } from "../movie-autocomplete-form-field/movie-autocomplete-form-field.component";

@UntilDestroy()
@Component({
  selector: "user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MovieAutocompleteFormFieldComponent,
  ],
})
export class UserFormComponent {
  constructor(
    private readonly userFormService: UserFormService,
    private router: Router
  ) {}

  readonly form = this.userFormService.form;
  readonly countries = Object.values(Country);

  ngOnInit() {
    this.form
      .get("country")
      ?.valueChanges.pipe(
        tap((country) => {
          const postCodeControl = this.form.get("postCode");
          if (country === Country.UnitedKingdom) {
            postCodeControl?.setValidators([
              Validators.required,
              Validators.pattern(
                /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/
              ),
            ]);
          } else if (country === Country.Ireland) {
            postCodeControl?.setValidators([
              Validators.minLength(6),
              Validators.maxLength(10),
            ]);
          }
          postCodeControl?.updateValueAndValidity();
        }),
        untilDestroyed(this)
      )
      .subscribe();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.router.navigate([
        "/thank-you",
        { data: JSON.stringify(this.form.value) },
      ]);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
