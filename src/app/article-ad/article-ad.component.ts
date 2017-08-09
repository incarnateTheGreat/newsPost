import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-article-ad',
  templateUrl: './article-ad.component.html',
  styleUrls: ['./article-ad.component.css']
})
export class ArticleAdComponent implements OnChanges {
  @Input() adObject: any;

  constructor() { }

  ngOnChanges() {
    console.log('Advert:', this.adObject)
  }
}