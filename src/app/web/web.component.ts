import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  ProductList:any

  constructor(private api:ApisService, private CartService:CartService ){}

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{this.ProductList=res ;
    
      this.ProductList.forEach((a:any) => {Object.assign(a, {quantity:1 , total:a.price})
        
      });
    })
  }

  addtocart(item:any){
    this.CartService.addtoocart(item)
    
  }

}
