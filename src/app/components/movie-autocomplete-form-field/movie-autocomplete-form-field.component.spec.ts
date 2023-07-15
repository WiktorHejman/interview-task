import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAutocompleteFormFieldComponent } from './movie-autocomplete-form-field.component';

describe('MovieAutocompleteFormFieldComponent', () => {
  let component: MovieAutocompleteFormFieldComponent;
  let fixture: ComponentFixture<MovieAutocompleteFormFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieAutocompleteFormFieldComponent]
    });
    fixture = TestBed.createComponent(MovieAutocompleteFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
