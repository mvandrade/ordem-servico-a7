import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputComponent } from './input/input.component'

const sharedRoutes: Routes = [
  {path: 'input', component: InputComponent}
];
@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { } 
