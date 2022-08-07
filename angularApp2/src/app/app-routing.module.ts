import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [ 
  {path:'',component: HomeComponent,canActivate:[AuthGuard]},
  {path:'cart',component:CartItemsComponent,canActivate:[AuthGuard]},
  {path:'products',loadChildren:()=>(import('./products/products.module').then(m=>m.ProductsModule)),canActivate:[AuthGuard]},
  {path:'employees',loadChildren:()=>(import('./employees/employees.module').then(m=>m.EmployeesModule)),canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
