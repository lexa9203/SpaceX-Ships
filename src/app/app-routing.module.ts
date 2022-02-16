import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { CardPageComponent } from './card-page/card-page.component';

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'card', component: CardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
