import { Component } from '@angular/core';
import { BreadcrumbItem } from 'src/app/models/breadcrumb';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {


  data: BreadcrumbItem[] =  [

    {
      label: 'home', url: '/home'
    },
    {
      label: 'admin', url:'/admin'
    }

  ]
}
