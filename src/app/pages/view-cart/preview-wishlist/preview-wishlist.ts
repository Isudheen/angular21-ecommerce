import { Component, inject } from '@angular/core';
import { ViewPanel } from "../../../directives/view-panel";
import { MatIcon } from "@angular/material/icon";
import { ECommerceStore } from '../../../ecommerce-store';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-preview-wishlist',
  imports: [ViewPanel, MatIcon, MatAnchor, RouterLink],
  templateUrl: './preview-wishlist.html',
  styleUrl: './preview-wishlist.scss',
})
export class PreviewWishlist {
  protected readonly store = inject(ECommerceStore);
}
