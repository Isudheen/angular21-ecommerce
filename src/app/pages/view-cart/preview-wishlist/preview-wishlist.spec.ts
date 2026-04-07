import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewWishlist } from './preview-wishlist';

describe('PreviewWishlist', () => {
  let component: PreviewWishlist;
  let fixture: ComponentFixture<PreviewWishlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewWishlist],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewWishlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
