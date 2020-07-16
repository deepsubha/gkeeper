import { Component, OnInit } from '@angular/core';
import {Product} from'../product'; 
import {MyserviceService} from'../myservice.service'; 
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

// link:string="./../assets/images/laptop.jpg";
//isDisabled:boolean=false;
employee:string;
empDetails:Product[];
  constructor(private edata:MyserviceService,private toastr:ToastrService){                
     //this.empDetails =this.edata.getEmployeeDetails();
     this.edata.getEmployeeDetails().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      console.log("items"+customers[1]);
      this.empDetails = customers;
      for(var i=0;i<this.empDetails.length;i++){
        console.log(this.empDetails[i].category);
        if(this.empDetails[i].category=="tv"){
          this.empDetails[i].link="./../assets/images/tv.jpg";
        }else if(this.empDetails[i].category=="mobile"){
          this.empDetails[i].link="./../assets/images/mobile.jpg";
        }else if(this.empDetails[i].category=="laptop"){
          this.empDetails[i].link="./../assets/images/laptop.jpg";
        }else if(this.empDetails[i].category=="keyboard"){
          this.empDetails[i].link="./../assets/images/keyboard.jpg";
        }else if(this.empDetails[i].category=="tab"){
          this.empDetails[i].link="./../assets/images/tab.jpg";
        }else if(this.empDetails[i].category=="fridge"){
          this.empDetails[i].link="./../assets/images/fridge.jpg";
        }else if(this.empDetails[i].category=="mouse"){
          this.empDetails[i].link="./../assets/images/mouse.jpg";
        }else if(this.empDetails[i].category=="speaker"){
          this.empDetails[i].link="./../assets/images/speaker.jpg";
        }else if(this.empDetails[i].category=="headphone"){
          this.empDetails[i].link="./../assets/images/headphone.jpg";
        }else if(this.empDetails[i].category=="pendrive"){
          this.empDetails[i].link="./../assets/images/pendrive.jpg";
        }
      }
    });
    
  }

pay(key:string) {
  this.toastr.warning('Sorry:( recharge your wallet first!','Wallet Balance');
  console.log("paying "+key);
  // this.edata.deletRecord(key)
  //   .catch(err => console.log(err));
}

bagItem(key:string){
  console.log("key is :"+key);
  this.edata.bagItem({KeyProduct:key});
  this.updateActive(key);
  this.toastr.success('Bagged item successfully :)','Success');
}

updateActive(key: string) {
  this.edata
    .updateCustomer(key, { isDisabled:true })
    .catch(err => console.log(err));
}

}
