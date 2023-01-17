import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetCardsComponent } from './features';
import { AppLayoutComponent } from './layouts';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'widgets',
        pathMatch: 'full',
      },
      {
        path: 'widgets',
        component: WidgetCardsComponent,
      },
      {
        path: '**',
        redirectTo: 'widgets',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
