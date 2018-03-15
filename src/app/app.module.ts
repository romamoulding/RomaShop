import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MouldingsComponent } from './mouldings/mouldings.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {MouldingService} from './moulding.service';
import { AppRoutingModule } from './/app-routing.module';
import { MouldingSearchComponent } from './moulding-search/moulding-search.component';
import { MouldingFiltersComponent } from './moulding-filters/moulding-filters.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,MatSelectModule, MatPlaceholder, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MouldingsComponent,
    CartComponent,
    CartItemComponent,
    MouldingSearchComponent,
    MouldingFiltersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule, ReactiveFormsModule,MatIconModule, MatButtonModule
   
  ],
 

  providers: [MouldingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
