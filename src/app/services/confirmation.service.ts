import { Customer } from './../models/Customer';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {

  confirmationSource = new BehaviorSubject<Customer>(new Customer);

  constructor() { }

  getCustomer(): Observable<Customer> {
    return this.confirmationSource.asObservable();
  }

  setCustomer(customer: Customer) {
    this.confirmationSource.next(customer);
  }

}
