import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ItemDetailsService } from 'src/app/services/item-details.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product = new Product;

  constructor(
    private cartService: CartService,
    private itemDetailsService: ItemDetailsService) { }

  ngOnInit(): void {
  }

  sendToDetails(): void {
    this.itemDetailsService.addToDetails(this.product);
  }

  addToCart(): void {
    this.cartService.addToCart(this.product)
    window.alert(`${this.product.name} is added to cart!`);
  }
  
}
