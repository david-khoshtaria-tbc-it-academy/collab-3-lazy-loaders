import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-gvncomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gvncomp.html',
})
export class GvnComp {
  constructor(public cart: CartService) {}

  addApple() {
    this.cart.addItem({ id: 1, name: 'Apple', price: 2 });
  }

  addBanana() {
    this.cart.addItem({ id: 2, name: 'Banana', price: 1 });
  }
}
