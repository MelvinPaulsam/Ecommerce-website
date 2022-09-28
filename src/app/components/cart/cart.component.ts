import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(
    private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.cartItems = res;
      this.totalPrice = this.cartService.calculateTotalPrice();
    })
  }

  addProduct(product: Product) {
    this.cartItems.push(product)
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cartService.calculateTotalPrice();
  }

}
