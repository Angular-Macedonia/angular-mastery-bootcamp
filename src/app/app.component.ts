import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { Product, Products } from '../assets/mock-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-mastery-bootcamp';
  selectedProduct: Product | undefined;

  products: Product[] = Products;
  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }
}
