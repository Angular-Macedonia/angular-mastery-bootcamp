import { Component, EventEmitter, inject, Inject, Input, OnInit, Output } from '@angular/core';
import { Product, Products } from '../../assets/mock-data';
import { CommonModule } from '@angular/common';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { HighlightDirective } from '../highlight.directive';
import { NewsService } from '../news.service';
import { SortListPipe } from '../sort-list.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductDisplayComponent, SortListPipe],
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

  addValue() {
    this.products.push(
      {
        id: "7",
        name: "Apples",
        description: "Water-resistant smartwatch with fitness tracking features.",
        price: 129.99,
        category: "Wearables",
      }
    )
  }
}
