import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { AddgadgetComponent } from './addgadget/addgadget.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
    {path:'sf',component:SearchproductComponent},
    {path:'pl',component:ProductlistComponent},
    {path:'ag',component:AddgadgetComponent},
    {path:'cart',component:CartComponent},
    {path:'',component:HomeComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }