import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, Products } from '../../assets/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent{
  @Input() products: Product[] = [];
  @Output() selectedProduct = new EventEmitter<Product>();

  onProductSelected(product: Product) {
    this.selectedProduct.emit(product);
  }
}
