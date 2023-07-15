import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'thank-you',
  template: `
    <h1>Thank you!</h1>
    <ul>
      <li>Name: {{ data.name }}</li>
      <li *ngIf="data.username">Username: {{ data.username }}</li>
      <li *ngIf="data.country">Country: {{ data.country }}</li>
      <li *ngIf="data.postCode">Post Code: {{ data.postCode }}</li>
      <li *ngIf="data.favouriteMovie">
        Favourite Movie: {{ data.favouriteMovie }}
      </li>
    </ul>
  `,
  styleUrls: ['./thank-you.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ThankYouComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}
  data!: User;

  ngOnInit() {
    this.data = JSON.parse(this.route.snapshot.paramMap.get('data')!);
  }
}
