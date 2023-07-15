import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';
import { EnterRoutingModule } from './enter-routing.module';
import { EnterComponent } from './enter.component';

@NgModule({
  declarations: [EnterComponent],
  imports: [CommonModule, UserFormComponent, EnterRoutingModule],
  exports: [EnterComponent],
})
export class EnterModule {}
