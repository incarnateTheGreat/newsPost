import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-article-text',
  templateUrl: './article-text.component.html',
  styleUrls: ['./article-text.component.scss']
})
export class ArticleTextComponent implements OnChanges {
  @Input() textContent: any;

  constructor() { }

  ngOnChanges() { }
}
