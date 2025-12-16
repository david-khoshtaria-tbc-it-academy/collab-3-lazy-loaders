import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart.interfaces';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSignal = signal<CartItem[]>([]);

  items = this.itemsSignal.asReadonly();

  totalItems = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.items().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  );

  addItem(item: Omit<CartItem, 'quantity'>) {
    this.itemsSignal.update(items => {
      const existing = items.find(i => i.id === item.id);

      if (existing) {
        return items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...items, { ...item, quantity: 1 }];
    });
  }

  decrease(itemId: number) {
    this.itemsSignal.update(items =>
      items
        .map(i =>
          i.id === itemId
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    );
  }

  clear() {
    this.itemsSignal.set([]);
  }
}
