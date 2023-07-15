import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  // { path: 'enter', component: UserFormComponent },
  {
    path: 'enter',
    loadChildren: () =>
      import('./features/enter/enter.module').then((m) => m.EnterModule),
  },
  { path: 'thank-you', component: ThankYouComponent },
  { path: '', redirectTo: '/enter', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
