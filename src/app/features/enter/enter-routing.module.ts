import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterComponent } from './enter.component';

export const ENTER_ROUTES: Routes = [
  {
    path: '',
    component: EnterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ENTER_ROUTES)],
  exports: [RouterModule],
})
export class EnterRoutingModule {}
