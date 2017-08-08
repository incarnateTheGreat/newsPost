import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnChanges {
  @Input() slideshowData: any;

  constructor() { }

  ngOnChanges() {
    console.log(this.slideshowData)
  }

}
