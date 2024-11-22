import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { BokreaComponent } from './pages/bokrea/bokrea.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, data: { breadcrumbLabel: 'home'}},

    {path: 'login', component: LoginComponent, data: { breadcrumbLabel: 'login'}},
    {path: 'admin', component: AdminDashboardComponent, data: { breadcrumbLabel: 'admin'}},
    {path: 'bokrea', component: BokreaComponent, data: { breadcrumbLabel: 'bokrea'}},
    {path: 'utcheckning', component: CheckoutComponent, data: { breadcrumbLabel: 'utcheckning'}},
    {path: 'kundvagn', component: CartComponent, data: { breadcrumbLabel: 'kundvagn'}}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
