import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Filho1Component } from './filho1/filho1.component';
import { Filho2Component } from './filho2/filho2.component';
import { Filho3Component } from './filho3/filho3.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'filho1',
    component: Filho1Component
  },
  {
    path: 'filho2',
    component: Filho2Component
  },
  {
    path: 'filho3',
    component: Filho3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
