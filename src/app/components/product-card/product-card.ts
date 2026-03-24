import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../models/product';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { ECommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-product-card',
  imports: [MatAnchor, MatIcon, MatIconButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();

  store = inject(ECommerceStore);

  isInWishlist = computed(() => this.store.wishListItems().find((p) => p.id === this.product().id));

  toggleWishList(product: Product) {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishList(product);
    }
  }
}
