import { CartService } from './../../../services/cart.service';
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: Product = new Product;

  @Output()
  deleteItem = new EventEmitter<any>();

  @Output()
  updateTotalPrice = new EventEmitter<any>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  deleteFromCart(): void {
    this.cartService.deleteFromCart(this.cartItem);
    this.deleteItem.emit();
    window.alert(`${this.cartItem.name} was deleted successfully!`);
  }

  updateTotalPricePrice(): void {
    this.updateTotalPrice.emit();
  }
}
