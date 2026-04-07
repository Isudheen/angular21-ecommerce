import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../models/cart';
import { QtySelector } from "../../components/qty-selector/qty-selector";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { ECommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-show-cart-item',
  imports: [QtySelector, MatIcon, MatIconButton],
  templateUrl: './show-cart-item.html',
  styleUrl: './show-cart-item.scss',
})
export class ShowCartItem {
  readonly item = input.required<CartItem>();

  protected readonly store = inject(ECommerceStore);

  readonly total = computed(() => (this.item().product.price * this.item().quantity).toFixed(2));

  public quantityUpdated(quantity: number) {
    this.store.setItemQuantity(this.item().product.id, quantity);
  }
}
