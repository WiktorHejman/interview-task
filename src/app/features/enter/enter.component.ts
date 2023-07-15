import { Component } from '@angular/core';
import { UserFormService } from 'src/app/services/user-form.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
  providers: [UserFormService],
})
export class EnterComponent {}
