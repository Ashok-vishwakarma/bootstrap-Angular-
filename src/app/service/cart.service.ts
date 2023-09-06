import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemproduct:any=[]
  public productlist=new BehaviorSubject([])

  constructor() { }

  getproduct(){
     return this.productlist.asObservable()
  }

  setproduct(product:any){
     this.cartitemproduct.push(...product)
     this.productlist.next(product)

  }

  addtoocart(product:any){
    this.cartitemproduct.push(product)
    this.productlist.next(this.cartitemproduct)
    this.gettotalprice()
    console.log(this.cartitemproduct)

  }
  gettotalprice(){
    let grandTotal=0;
    this.cartitemproduct.map((a:any)=>{grandTotal+=a.total})
  }

  // removeelement(){
  //   this.cartitemproduct.map((a:any)=>{
  //     if(product.id===a.id){
  //       this.cartitemproduct.splice('index' , 1)
  //     }
  //   })
  
  // }
  
}

