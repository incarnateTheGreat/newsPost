import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import _ from 'lodash';

//Components
import { SlideshowComponent } from '../slideshow/slideshow.component';

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
      pageData: '',
      slideshowData: {}
    };
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log(data)
      this.articleDataObj.title = data.Title;
      this.articleDataObj.excerpt = data.Excerpt;
      this.articleDataObj.mainImageURL = data.MainImageUrl;

      // _.forEach(this.articleDataObj.pageData, function(page) {
      //   console.log(page)
      // });
      this.articleDataObj.pageData += data.Pages[1][0].Content;
      this.articleDataObj.slideshowData = data.Pages[1][1];


    })
  }

}
