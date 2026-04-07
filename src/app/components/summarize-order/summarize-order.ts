import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from "../../directives/view-panel";
import { ECommerceStore } from '../../ecommerce-store';

const TAX_RATE = 0.05;

@Component({
  selector: 'app-summarize-order',
  imports: [ViewPanel],
  templateUrl: './summarize-order.html',
  styleUrl: './summarize-order.scss',
})
export class SummarizeOrder {
  protected readonly store = inject(ECommerceStore);

  readonly subTotal = computed(() => this.store.cartItems().reduce((acc, item) => acc + (item.product.price * item.quantity), 0));
  readonly tax = computed(() => (TAX_RATE * this.subTotal()));
  readonly total = computed(() => this.subTotal() + this.tax());
}
