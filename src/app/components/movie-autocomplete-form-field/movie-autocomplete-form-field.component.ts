import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
} from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'movie-autocomplete-form-field[movieControl]',
  templateUrl: './movie-autocomplete-form-field.component.html',
  styleUrls: ['./movie-autocomplete-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [OmdbService],
})
export class MovieAutocompleteFormFieldComponent implements OnInit {
  constructor(private readonly omdbService: OmdbService) {}

  @Input() movieControl!: FormControl<string | null>;

  filteredMovies!: Observable<Movie[]>;

  ngOnInit(): void {
    this.filteredMovies = this.movieControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((val) => {
        return this.omdbService.filter(val ?? '');
      })
    );
  }

  displayFn(movie?: Movie): string {
    return movie ? movie.Title : '';
  }
}
