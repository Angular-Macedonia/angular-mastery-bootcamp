import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../assets/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.scss'
})
export class ProductDisplayComponent {

  @Input() product!: Product;
  @Output() clickedProduct = new EventEmitter<Product>();

  clickProduct() {
    console.log(this.product);
    this.clickedProduct.emit(this.product);
  }

}
