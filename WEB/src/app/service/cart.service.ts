import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: []})

  constructor(private _snackBar: MatSnackBar) { }


  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

      if(itemInCart) {
        itemInCart.quantity += 1;
      } else {
        items.push(item);
      }

      this.cart.next({items});
      this._snackBar.open('En produkt har lagts till i kundvagnen', 'Ok', {duration: 3000});
    
  }

  getTotal(items: Array<CartItem>): number  {

    return items.map((item) => item.price * item.quantity).
      reduce((prev, current) => prev + current, 0);

      
  }

  clearCart(): void {
    this.cart.next({ items: []});
    this._snackBar.open('Kungvagnen är tom', 'Ok', {
        duration: 3000
    });
  }

  removeFromCart(item: CartItem, update = true) {
    const filteredItems = this.cart.value.items.filter((_item) => 
      _item.id !== item.id);

    if(update) {
      this.cart.next({ items: filteredItems});
    this._snackBar.open('En produkt har tagits bort från kundvagnen', 'Ok', {
        duration: 3000
    });

    }

    return filteredItems;
    
  }

  removeQuantity(item: CartItem) {
    let itemForRemoval: CartItem | undefined;

    
    let filteredItem = this.cart.value.items.map((_item) => {
      if(_item.id === item.id) {
        _item.quantity --;
        if(_item.quantity === 0 ) {
            itemForRemoval = _item
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItem = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItem});
    this._snackBar.open('En produkt har tagits bort från kundvagn', 'Ok', {
      duration: 3000
    });
  }
}
