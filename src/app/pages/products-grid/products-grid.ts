import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    MatNavList,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
  ],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  category = input('All');
  products = signal<Product[]>([
    {
      id: 'prod_001',
      name: 'Ergonomic Mechanical Keyboard',
      description:
        'A fully customizable mechanical keyboard with tactile switches and RGB backlighting for comfortable, all-day typing.',
      price: 129.99,
      imageUrl: 'https://picsum.photos/seed/keyboard/400/300',
      rating: 4.8,
      reviewCount: 342,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: 'prod_002',
      name: 'Noise-Cancelling Headphones',
      description:
        'Over-ear wireless headphones with active noise cancellation and 30 hours of battery life.',
      price: 199.5,
      imageUrl: 'https://picsum.photos/seed/headphones/400/300',
      rating: 4.6,
      reviewCount: 890,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: 'prod_003',
      name: 'Minimalist Coffee Mug',
      description:
        'A sleek, 12oz ceramic coffee mug with a matte finish. Microwave and dishwasher safe.',
      price: 14.99,
      imageUrl: 'https://picsum.photos/seed/mug/400/300',
      rating: 4.2,
      reviewCount: 56,
      inStock: true,
      category: 'Home & Kitchen',
    },
    {
      id: 'prod_004',
      name: 'Smart Fitness Tracker',
      description:
        'Track your steps, heart rate, and sleep patterns with this lightweight, water-resistant fitness band.',
      price: 59.95,
      imageUrl: 'https://picsum.photos/seed/smartwatch/400/300',
      rating: 4.4,
      reviewCount: 1205,
      inStock: false,
      category: 'Fitness',
    },
    {
      id: 'prod_005',
      name: 'Insulated Water Bottle',
      description:
        'Stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
      price: 24.0,
      imageUrl: 'https://picsum.photos/seed/bottle/400/300',
      rating: 4.9,
      reviewCount: 4310,
      inStock: true,
      category: 'Outdoors',
    },
    {
      id: 'prod_006',
      name: 'Adjustable Office Chair',
      description:
        'Ergonomic mesh office chair with lumbar support, adjustable armrests, and tilt mechanism.',
      price: 249.99,
      imageUrl: 'https://picsum.photos/seed/chair/400/300',
      rating: 4.5,
      reviewCount: 218,
      inStock: true,
      category: 'Furniture',
    },
    {
      id: 'prod_007',
      name: 'Ultra-Wide Monitor',
      description:
        '34-inch curved ultra-wide monitor with a 144Hz refresh rate, perfect for multitasking and gaming.',
      price: 450.0,
      imageUrl: 'https://picsum.photos/seed/monitor/400/300',
      rating: 4.7,
      reviewCount: 612,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: 'prod_008',
      name: 'Premium Yoga Mat',
      description:
        'Non-slip, eco-friendly yoga mat with alignment lines and extra cushioning for joint support.',
      price: 35.5,
      imageUrl: 'https://picsum.photos/seed/yoga/400/300',
      rating: 4.8,
      reviewCount: 875,
      inStock: true,
      category: 'Fitness',
    },
    {
      id: 'prod_009',
      name: 'Leather Messenger Bag',
      description:
        'Genuine leather messenger bag with multiple compartments, designed to fit laptops up to 15 inches.',
      price: 89.9,
      imageUrl: 'https://picsum.photos/seed/bag/400/300',
      rating: 4.3,
      reviewCount: 144,
      inStock: false,
      category: 'Accessories',
    },
    {
      id: 'prod_010',
      name: 'Portable Power Bank',
      description:
        '10000mAh portable charger with dual USB outputs and fast-charging capabilities.',
      price: 29.99,
      imageUrl: 'https://picsum.photos/seed/powerbank/400/300',
      rating: 4.6,
      reviewCount: 3200,
      inStock: true,
      category: 'Electronics',
    },
  ]);
  filteredProducts = computed(() => {
    if (this.category() === 'All') return this.products();
    return this.products().filter(
      (product) => this.category() === product.category,
    );
  });
  categories = signal([
    'All',
    'Electronics',
    'Accessories',
    'Fitness',
    'Furniture',
    'Outdoors',
    'Home & Kitchen',
  ]);
}
