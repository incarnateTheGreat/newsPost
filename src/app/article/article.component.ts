import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import _ from 'lodash';

//Components
import { ArticleTextComponent } from './article-text/article-text.component';
import { ArticleImageComponent } from './article-image/article-image.component';
import { ArticleAdComponent } from './article-ad/article-ad.component';

//Services
import { GetArticleDataService } from '../services/get-article-data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articleDataObj: any;

  constructor(private dataService:GetArticleDataService) {
    this.articleDataObj = {
      title: '',
      exerpt: '',
      mainImageURL: '',
      pageData: []
    };
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.articleDataObj.title = data.Title;
      this.articleDataObj.excerpt = data.Excerpt;
      this.articleDataObj.mainImageURL = data.MainImageUrl;

      for(let key in data.Pages) {
        this.articleDataObj.pageData.push(data.Pages[key]);
      }
    })
  }
}
