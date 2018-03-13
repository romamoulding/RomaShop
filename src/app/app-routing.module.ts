import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MouldingsComponent }      from './mouldings/mouldings.component';



const routes: Routes = [
  { path: 'quick-order', component: MouldingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})

export class AppRoutingModule { }
