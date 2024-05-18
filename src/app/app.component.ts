import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { Product, Products } from '../assets/mock-data';
import { FormsModule } from '@angular/forms';
import { ProductDisplayComponent } from './product-list/product-display/product-display.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CommonModule, FormsModule, HighlightDirective],
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

  parentText: string ='';
}
