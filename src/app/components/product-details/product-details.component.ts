import { CartService } from '../../services/cart.service';
import { ItemDetailsService } from '../../services/item-details.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product;

  constructor(
    private itemDetailsService: ItemDetailsService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.itemDetailsService.getitemDetails().subscribe(res => {
      this.product = res;
    })
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    window.alert(`${this.product.name} was added to cart successfully!`);
  }

}
