import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { BusinessCardComponent } from './views/headers/business-card/business-card.component';
import { ProductListComponent } from './views/productlist/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { APP_CONFIG_t } from './app.config';
import { ETHNIC_CONFIG } from './app.config.ethnic';



@NgModule({
  declarations: [
    AppComponent,
    BusinessCardComponent,
    ProductListComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    { provide: APP_CONFIG_t, useValue: ETHNIC_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
