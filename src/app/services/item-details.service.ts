import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  itemDetailsSource = new BehaviorSubject<Product>(new Product);

  constructor() { }

  getitemDetails(): Observable<Product> {
    return this.itemDetailsSource.asObservable();
  }

  addToDetails(product: Product): void {
    this.itemDetailsSource.next(product);
  }
}
