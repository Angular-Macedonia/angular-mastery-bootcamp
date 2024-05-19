import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../assets/mock-data';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../highlight.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.scss'
})
export class ProductDisplayComponent implements OnInit {
  ngOnInit(): void {
    // if(){
    //   router // do not do if check conditions on init do it in guards!
    // }
    console.log(this.route.snapshot)
  }

  @Input() product!: Product;
  @Output() clickedProduct = new EventEmitter<Product>();

  route = inject(ActivatedRoute);

  clickProduct() {
    console.log(this.product);
    this.clickedProduct.emit(this.product);
  }

}
