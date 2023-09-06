import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product:any =[]
  public grandtotal:any=0
 constructor(private CartService:CartService){}


  ngOnInit(): void {
    
    this.CartService.getproduct()
    .subscribe((res)=>{this.product=res;
    this.grandtotal=this.CartService.gettotalprice})
  }

  // removeitem(item:any){
  //   this.CartService.removeelement()

  // }

 
}
