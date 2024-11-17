import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreadcrumbItem } from 'src/app/models/breadcrumb';
import { Product } from 'src/app/models/product.model';

 


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})




export class BreadcrumbComponent implements OnInit {

  @Input() selectedProduct:Product | undefined;
  @Input() breadCrumbs:BreadcrumbItem[] | undefined;

  constructor() {}


ngOnInit(): void {

    }

    get combinedItems(): BreadcrumbItem[] | undefined {
  
      if (this.selectedProduct) {
        const productBread = new BreadcrumbItem();
        productBread.label = this.selectedProduct.title;
        productBread.url = this.selectedProduct.id?.toString();
        this.breadCrumbs?.push(productBread);
      }
  
      return this.breadCrumbs;
    }

}




