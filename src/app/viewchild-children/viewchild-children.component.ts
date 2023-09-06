import { Component, ElementRef, ViewChild , OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild-children',
  templateUrl: './viewchild-children.component.html',
  styleUrls: ['./viewchild-children.component.scss']
})
export class ViewchildChildrenComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.markedr)
  }

  @ViewChildren('reff')  markedr!:ElementRef        //using #reff in DOM file  and how to wite --> @viewchild (refrence name) make variable ad menthion its type 
  @ViewChild('reff') mari!:ElementRef

}


