import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-article-image',
  templateUrl: './article-image.component.html',
  styleUrls: ['./article-image.component.scss']
})
export class ArticleImageComponent implements OnChanges {
  @Input() imageObj: any;

  constructor() { }

  ngOnChanges() { }
}
