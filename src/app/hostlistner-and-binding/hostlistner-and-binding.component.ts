import { Component , ElementRef, OnInit , HostBinding , HostListener} from '@angular/core';

@Component({
  selector: 'app-hostlistner-and-binding',
  templateUrl: './hostlistner-and-binding.component.html',
  styleUrls: ['./hostlistner-and-binding.component.scss']
})
export class HostlistnerAndBindingComponent implements OnInit {


  constructor(private el:ElementRef){}

  @HostBinding('style.color') text!: string    //in this line style.color used in @HB and assign name as text and we can use this line where we want to use

  // @HostBinding('style.color') textt: string | undefined                      // above line we can wrie in this manner also  

  ngOnInit(): void {
    // this.el.nativeElement.style.color="blue"   //using this hostbinding ham propety ya value ko use kar sakte h ya kuch change karne ke liye lke style.color ko hsotbinding mein use karu toh wo el.nativeref use nahi karna padega    
    this.text="blue"
  
  }

  @HostListener("click") onclick()   { //parenthises mein event mention karo or uske bahar fucntion ko define karna h 
    // alert("this is message from hostlisner")

    this.text='green'

  }    
  
  @HostListener('mouseover') mouseover(){
    this.text='yellow'                                 //  if hostbind nai hota tho hame pura line mention karna padta as we mention next line
    // this.el.nativeElement.style.color='yellow'
  }
  @HostListener('mouseleave') mouseleave(){
    this.text='purple'
  }

 

}
