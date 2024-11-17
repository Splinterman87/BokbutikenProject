import { Component, OnInit } from '@angular/core';
import { BreadcrumbItem } from 'src/app/models/breadcrumb';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data: BreadcrumbItem[] =  [
    {
      label: 'home', url: '/home'
    },
    {
      label: 'kundvagn', url:'/kundvagn'
    }
    

  ]

  
  cart: Cart = {items : []};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'image',
    'category',
    'title',
    'description',
    'price',
    'quantity',
    'total',
    'action'


  ]; 
  
  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
       this.cart = _cart;
       this.dataSource = this.cart.items;
    });
   
   
    
  }
  





  getTotal(items: Array<CartItem>): number  {

    return this.cartService.getTotal(items);

  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  } 
}
