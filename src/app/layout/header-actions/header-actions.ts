import { Component, computed, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button'
import { MatIcon } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { ECommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-header-actions',
  imports: [MatButton, MatIconButton, MatIcon, RouterLink, MatBadge],
  templateUrl: './header-actions.html',
  styleUrl: './header-actions.scss',
})
export class HeaderActions {
  readonly store = inject(ECommerceStore);
  readonly wishlistCount = computed(() => this.store.wishListItems().length);
}
