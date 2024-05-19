import { Component, EventEmitter, inject, Inject, Input, OnInit, Output } from '@angular/core';
import { Product, Products } from '../../assets/mock-data';
import { CommonModule } from '@angular/common';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { HighlightDirective } from '../highlight.directive';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDisplayComponent],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  newsService = inject(NewsService);

  ngOnInit(): void {
    this.newsService.getProduct().subscribe({
      next: (products) => this.products = products
    })
  }
  products: Product[] = [];
  @Output() selectedProduct$ = new EventEmitter<Product>();

  @Input() childText = '';
  productSelected: Product | undefined;

  onProductSelected(product: Product) {
    this.selectedProduct$.emit(product)
    this.productSelected = product;
    // this.selectedProduct.emit(product);
  }
}
