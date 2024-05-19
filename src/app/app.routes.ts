import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDisplayComponent } from './product-list/product-display/product-display.component';

export const routes: Routes = [
  {
    path: 'products', component: ProductListComponent,

  },
  {
    path: 'products/:id', component: ProductDisplayComponent,
  },

];
