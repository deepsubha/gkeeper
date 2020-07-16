import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addgadget',
  templateUrl: './addgadget.component.html',
  styleUrls: ['./addgadget.component.css']
})
export class AddgadgetComponent implements OnInit {
  product:Product = new Product();
  openLoginForm: boolean;

  constructor(private ms:MyserviceService) { }

  openLogin(){
    
    this.openLoginForm = !this.openLoginForm;
    if(this.openLoginForm){
      console.log("in");
      document.getElementById('loginSectionId').style.display = 'flex';
      document.getElementById('loginSectionId').classList.add('loginSection');
    }else{
      console.log("out");
      document.getElementById('loginSectionId').style.display = 'none';

    }
  }

  addGadget(){
    this.product.isDisabled=false;
    console.log(this.product);
    this.ms.addGadget(this.product);
    this.product= new Product();
  }

  ngOnInit(): void {
  }

}
