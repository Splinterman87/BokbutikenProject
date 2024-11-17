import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { Cart } from './models/cart.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cart: Cart = { items: []}

  
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    })
  }

  title = 'Bokportalen';

 constructor(private cartService: CartService, private router: Router) {
      this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
       console.log('<<<<<<<<Route Tree:', this.router.config);
       }
   });
   }

  
}
