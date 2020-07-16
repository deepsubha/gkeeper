import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from'./myservice.service'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddgadgetComponent } from './addgadget/addgadget.component';
import { CartComponent } from './cart/cart.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
 
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    SearchproductComponent,
    HomeComponent,
    AddgadgetComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule, // for databas
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 1300,
      preventDuplicates: false,
    })
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

