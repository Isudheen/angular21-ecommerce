import { Component } from '@angular/core';
import { BackButton } from "../../components/back-button/back-button";
import { ListCartItems } from "./list-cart-items/list-cart-items";
import { PreviewWishlist } from "./preview-wishlist/preview-wishlist";
import { SummarizeOrder } from "../../components/summarize-order/summarize-order";

@Component({
  selector: 'app-view-cart',
  imports: [BackButton, ListCartItems, PreviewWishlist, SummarizeOrder],
  templateUrl: './view-cart.html',
  styleUrl: './view-cart.scss',
})
export class ViewCart {}
