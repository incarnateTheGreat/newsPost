import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-article-text',
  templateUrl: './article-text.component.html',
  styleUrls: ['./article-text.component.css']
})
export class ArticleTextComponent implements OnChanges {
  @Input() textContent: any;

  constructor() { }

  ngOnChanges() {
    console.log('Article Text:', this.textContent)
  }
}
