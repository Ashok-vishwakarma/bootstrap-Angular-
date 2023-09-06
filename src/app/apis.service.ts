import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  url="http://localhost:3000/posts"

  constructor( private http:HttpClient) { }
  

  getproduct(){
    return this.http.get<any>(this.url).pipe(map(res=>{return res}))
  }

}
