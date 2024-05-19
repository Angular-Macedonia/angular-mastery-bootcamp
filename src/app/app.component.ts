import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { Product, Products } from '../assets/mock-data';
import { FormsModule } from '@angular/forms';
import { ProductDisplayComponent } from './product-list/product-display/product-display.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { NewsService } from './news.service';
import { BehaviorSubject, catchError, EMPTY, Subject } from 'rxjs';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CommonModule, FormsModule, HighlightDirective, TemplateFormsComponent,
            ReactiveFormsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-mastery-bootcamp';

  selectedProduct: Product | undefined;

  products: Product[] = [];

  newsService = inject(NewsService);

  loading: boolean = true;
  loading$$ = new BehaviorSubject(true);
  calculatePrice$$ = new Subject<Product[]>();

  router = inject(Router);

  onProductSelected(product: Product) {
    this.selectedProduct = product;
  }

  parentText: string ='';
  price: number = 0;

  ngOnInit(): void {

    this.calculatePrice$$.subscribe(
      (values) => {
        this.price = values.reduce(
          (prev, curr) => prev + curr.price, 0
        )
      }
    )

    this.loading$$.subscribe(
      (value) => console.log(value)
    )

    this.newsService.getProduct().pipe(
      catchError((err) => {
        console.log('some error happened');
        return EMPTY;
      })
    ).subscribe(
      {
        next: (products) => {
          this.products = products;
          this.loading = false;
          this.loading$$.next(false);
          this.calculatePrice$$.next(products);
        },
        error: (err) => {
          console.log('some error happened')
        },
        complete: () => {
          console.log('completed request');
        }
      }
    )
  }

  navigate() {
    this.router.navigate(['products']);
  }
}


class Observable {

  susbribers!: [() => void];


  subscribe(func: () => void){
    this.susbribers.push(func)
  }

  subscribeDone() {
    this.susbribers.forEach((f) => {
      f();
    })
  }


}
