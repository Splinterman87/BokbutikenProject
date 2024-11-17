import { Component } from '@angular/core';
import { BreadcrumbItem } from 'src/app/models/breadcrumb';

@Component({
  selector: 'app-bokrea',
  templateUrl: './bokrea.component.html',
  styleUrls: ['./bokrea.component.css']
})
export class BokreaComponent {

  data: BreadcrumbItem[] =  [
    {
      label: 'home', url: '/home'
    },
    {
      label: 'bokrea', url:'/bokrea'
    }
    

  ]
}
