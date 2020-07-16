import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { map } from 'rxjs/operators';
import { Product } from '../product';
import { Bag } from '../bag';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  baggedItems:Product[]=[];
  empDetails:Product[]=[];
  bufferData:Product[]=[];
  conscalling:boolean=true;
  item:boolean=false;
  constructor(private edata:MyserviceService,private toastr:ToastrService) { 
    this.getDetails();
    console.log(this.baggedItems.length +"  "+this.item);
    
  }
  getDetails(){
      this.edata.getEmployeeDetails().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(customers => {
        console.log("2");
        this.empDetails = customers;
      });

    this.edata.baggedItems().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(bagged => {
      console.log("3");
      for(var i=0;i<bagged.length;i++){
       console.log("key of bagged item"+bagged[0].key);
       console.log("keyProduct of bagged item"+bagged[0].KeyProduct);
        this.getBaggedItems(bagged[i].KeyProduct,bagged[i].key);       
      }
      console.log(this.baggedItems);
    });
  }

  getBaggedItems(searchKey:string,key:string){
    console.log("4");
    for(var i=0;i<this.empDetails.length;i++){
      console.log("5");
      if(searchKey == this.empDetails[i].key){
        let p=new Product();
          p=this.empDetails[i];
          p.KeyProduct=key;
          console.log(this.conscalling);
               //if(this.conscalling == true){
              this.baggedItems.push(p);
            //}
      }
    }
    console.log(this.baggedItems.length +"  "+this.item);
    if(this.baggedItems.length>0){this.item=true;}
    else{this.item=false;}
  }
  pay(key:string){
    this.toastr.warning('Sorry:( recharge your wallet first!','Wallet Balance');
    console.log("to be payed "+key);
  }

  deletRecord(KeyProduct:string,key:string){
    this.baggedItems=[];
    this.conscalling=false;
    console.log(KeyProduct);
    console.log(key);
    this.edata.deletRecord(KeyProduct)
              .then(result=>console.log(result))
              .catch(err => console.log(err));
    this.edata
               .updateCustomer(key, { isDisabled:false })
               .catch(err => console.log(err));
    //location.reload(true);
    if(this.baggedItems.length>0){this.item=true;}
    else{this.item=false;}
    this.toastr.error('item deleted successfully!','Deleted');
  }

}
