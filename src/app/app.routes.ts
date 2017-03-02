import { ProductListComponent } from './views/productlist/product-list/product-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
 {
    path: 'productlist',
    component: ProductListComponent
  },
  {
    path: '',
    redirectTo: '/productlist',
    pathMatch: 'full'
  },
  { path: '**', pathMatch: 'full', redirectTo: '/productlist' }
];
