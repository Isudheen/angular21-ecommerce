import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { ECommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();
  store = inject(ECommerceStore);
}
