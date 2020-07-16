import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {HttpClient} from '@angular/common/http';
import {Product} from'../app/product';                       //employee-->product



@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
 emp:Product[]=[];
searchedProduct:Product[]=[];

private dbPath = '/products';
private dbPath_bagItem= '/bag';
customersRef: AngularFireList<Product> = null;

  constructor(public http:HttpClient,private db:AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
    this.fetchData(); 
  }
  addGadget(product: Product):void{
    this.customersRef.push(product);
    console.log("check database!");
  }
  
  fetchData(){
           this.http.get('./assets/db.json').subscribe(data=>{this.addProduct(data)})
  } 
  addProduct(data:any){
        for(let d of data){
          let p=new Product();
          p.id=d.id;
          p.name=d.name;
          p.price=d.price;
          p.category=d.category;
          p.imeino=d.imeino;
          p.owner=d.owner;
          p.rating=d.rating;
          p.isDisabled=false;
          this.emp.push(p);
         // this.customersRef.push(p);                 //for the first time to send raw data to database
        }
  }

  getEmployeeDetails(): AngularFireList<Product> {
    return this.customersRef;
  }
    
deletRecord(key: string): Promise<void> {
  this.customersRef = this.db.list(this.dbPath_bagItem);
  return this.customersRef.remove(key);
}


searchRecord():AngularFireList<Product>{
  return this.customersRef;
}

bagItem(key:any){
  this.customersRef = this.db.list(this.dbPath_bagItem);
  //this.customersRef.update(key, {isDisabled:true});
  this.customersRef.push(key);
}

updateCustomer(key: string, value: any): Promise<void> {
  this.customersRef = this.db.list(this.dbPath);
  return this.customersRef.update(key, value);
}

baggedItems():AngularFireList<Product>{
  this.customersRef = this.db.list(this.dbPath_bagItem);
  return this.customersRef;
}
}


