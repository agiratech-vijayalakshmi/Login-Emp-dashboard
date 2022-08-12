import { Component, OnInit , ViewEncapsulation, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCarousel, MatCarouselComponent , MatCarouselSlide, MatCarouselSlideComponent} from 'ng-mat-carousel';

@Component({
  selector: 'app-employee-carousel',
  templateUrl: './employee-carousel.component.html',
  styleUrls: ['./employee-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeCarouselComponent implements OnInit {
 
  isChecked:boolean | undefined;
  @ViewChild('item1', {static: false}) item1: any;
  @ViewChild('item2', {static: false}) item2: any;
  @ViewChild('item3', {static: false}) item3: any;
 
  imageObject = [{
    image: '/assets/images/c_img2.jpeg',
    thumbImage: '/assets/images/carousel1.jpeg',
    title: 'Joshaphine Marrier'
  
}, {
    image: '/assets/images/c_img2.jpeg',
    thumbImage: '/assets/images/carousel1.jpeg',
    title: 'Art Standell'
}, {
    image: '/assets/images/c_img2.jpeg',
    thumbImage: '/assets/images/carousel1.jpeg',
    title:'James Weiser'
}];

imageClickHandler(e: any) {
  console.log('image click', e);
}

 constructor() { }


ngOnInit(): void {
  
}


prev(){


}
next(){

}

}
