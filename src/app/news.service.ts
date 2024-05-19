import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, filter, map, Observable, of, tap, throwError } from 'rxjs';
import { Product, Products } from '../assets/mock-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getProduct(): Observable<Product[]> {
    // return this.http$.get<Product[]>(`www.producut/api/products/`);
    return of(Products).pipe(
      delay(2000),
      // tap(() => {
      //   throw new Error("error")
      // })
      // map(products => products.filter(product => product.price < 100))
    )

  }


}
