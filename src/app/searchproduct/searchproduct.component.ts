import { Component, OnInit } from '@angular/core';
import {Product} from'../product'; 
import {MyserviceService} from'../myservice.service'; 
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {

  constructor(private edata:MyserviceService){}
  productDetails:Product[]=[];
  //p:Product;
  title = 'Search Form';
  id:string;


  display(){
    console.log(this.id);
    //this.productDetails=this.edata.searchRecord(this.id);
    this.edata.searchRecord().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.productDetails=[];
      console.log(customers[0].name);
      for(var i=0;i<customers.length;i++){
        if(customers[i].name == this.id || customers[i].category == this.id){
          let p=new Product();
          p=customers[i];
          this.productDetails.push(p);
        }
      }
    });
    
  }

}

