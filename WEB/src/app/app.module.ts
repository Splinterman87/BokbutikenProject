import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { BokreaComponent } from './pages/bokrea/bokrea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table'
import {MatBadgeModule} from '@angular/material/badge'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { ProductsHeaderComponent } from './pages/home/products-header/products-header.component';
import { FiltersComponent } from './pages/home/filters/filters.component';
import { ProductBoxComponent } from './pages/home/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './service/cart.service';
import { BreadcrumbComponent } from './pages/home/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';
import { AdminSideMenuComponent } from './pages/admin-dashboard/admin-side-menu/admin-side-menu.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AdminDashboardComponent,
    ProductViewComponent,
    CheckoutComponent,
    CustomerProfileComponent,
    BokreaComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
    BreadcrumbComponent,
    AdminSideMenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    BreadcrumbModule
  ],

  
  providers: [CartService],

  bootstrap: [AppComponent]
})
export class AppModule { }
