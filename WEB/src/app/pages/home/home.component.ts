import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/service/cart.service';




const ROWS_HEIGHT: { [id:number]: number} = { 1: 400, 3: 355, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {

  products: Product[] = [{
    id: 1,
    title: 'Kalle ankas barnbok',
    price: 15,
    category: 'Barnbok',
    description: 'kalle läser sagor för knattarna',
    image: 'https://via.placeholder.com/150'
  }, 
  {
    id: 2,
    title: 'Greta gris äventyr',
    price: 25,
    category: 'Barnbok',
    description: 'Greta gris är ute på äventyr',
    image: 'https://via.placeholder.com/150'
  }, 
  {
    id: 3,
    title: 'Bina flyger inte söderut',
    price: 5,
    category: 'Barnbok',
    description: 'bin som flyger fast inte söderut',
    image: 'https://via.placeholder.com/150'
  }];

  category: string | undefined;
  cols= 3;
  rowHeight = ROWS_HEIGHT[this.cols];

  constructor(private cartService : CartService) {}
  ngOnInit(): void {}
    
 
  
  
     onColumnsCountChange(colsNum: number): void {
       this.cols = colsNum;
       this.rowHeight = ROWS_HEIGHT[this.cols];
     }
  
    onShowCategory(newCategory: string): void {
      console.log('<----- onShowCategory was called: ', newCategory);
      this.category = newCategory;
     
    }

    onAddToCart(product: Product): void {
      this.cartService.addToCart({  
        image: product.image,
        category: product.category,
        title: product.title,
        price: product.price,
        description: product.description,
        quantity: 1,
        id: product.id
      });
    
    }
  
}

