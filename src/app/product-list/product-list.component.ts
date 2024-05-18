import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, Products } from '../../assets/mock-data';
import { CommonModule } from '@angular/common';
import { ProductDisplayComponent } from './product-display/product-display.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDisplayComponent],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent{
  @Input() products: Product[] = [];
  @Output() selectedProduct$ = new EventEmitter<Product>();

  @Input() childText = '';

  onProductSelected(product: Product) {
    this.selectedProduct$.emit(product)
  
    // this.selectedProduct.emit(product);
  }
}
