import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MouldingsComponent } from './mouldings/mouldings.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {MouldingService} from './moulding.service';
import { AppRoutingModule } from './/app-routing.module';
import { MouldingSearchComponent } from './moulding-search/moulding-search.component';
import { MouldingFiltersComponent } from './moulding-filters/moulding-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    MouldingsComponent,
    CartComponent,
    CartItemComponent,
    MouldingSearchComponent,
    MouldingFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
   
  ],
 

  providers: [MouldingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
