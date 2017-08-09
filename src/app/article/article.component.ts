import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import _ from 'lodash';

//Components
import { SlideshowComponent } from '../slideshow/slideshow.component';
import { ArticleTextComponent } from '../article-text/article-text.component';
import { ArticleImageComponent } from '../article-image/article-image.component';
import { ArticleAdComponent } from '../article-ad/article-ad.component';

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
      // console.log(data)
      this.articleDataObj.title = data.Title;
      this.articleDataObj.excerpt = data.Excerpt;
      this.articleDataObj.mainImageURL = data.MainImageUrl;

      // _.forEach(data.Pages, (page, i) => {
      //   _.forEach(page, (obj, j) => {
      //     // console.log(obj)
      //     // if(obj.Type === 'TextBlock') {
      //     //   this.articleDataObj.pageData += obj.Content;
      //     // } else if(obj.Type === 'Image') {
      //     //
      //     // }
      //   });

      for(let key in data.Pages) {
        console.log(data.Pages[key])
        this.articleDataObj.pageData.push(data.Pages[key]);
      }

      // _.forEach(data.Pages, (e, i) => {
      //   console.log(e)
      //   this.articleDataObj.pageData = e;
      // });

      // });
    })
  }

  generateArray(obj) {
    // console.log(obj)
    //  return Object.keys(obj).map((key)=>{ return obj[key]});
  }

}
