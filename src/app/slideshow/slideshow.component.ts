import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  // @Input() slideshowData: any;

  @Input()
  public set slideshowData(value: any) {
    // sdFactor updated ! you can do something
      this.slideshowData = value;
  }

  public get slideshowData(): any {
      return this.slideshowData;
  }

  constructor() { }

  ngOnInit() {
    console.log(this.slideshowData)
  }

}
