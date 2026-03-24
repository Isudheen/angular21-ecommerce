import { Component, inject } from '@angular/core';
import { BackButton } from "../../components/back-button/back-button";
import { ECommerceStore } from '../../ecommerce-store';
import { ProductCard } from "../../components/product-card/product-card";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton, MatButton } from "@angular/material/button";
import { EmptyWishlist } from "./empty-wishlist/empty-wishlist";

@Component({
  selector: 'app-my-wishlist',
  imports: [BackButton, ProductCard, MatIcon, MatIconButton, MatButton, EmptyWishlist],
  templateUrl: './my-wishlist.html',
  styleUrl: './my-wishlist.scss',
})
export class MyWishlist {
  readonly store = inject(ECommerceStore);
}
