import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleImageComponent } from './article-image/article-image.component';
import { ArticleTextComponent } from './article-text/article-text.component';
import { ArticleAdComponent } from './article-ad/article-ad.component';
import { VideoComponent } from './video/video.component';

//Services
import { GetArticleDataService } from './services/get-article-data.service';
import { GetVideoDataService } from './services/get-video-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleImageComponent,
    ArticleTextComponent,
    ArticleAdComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'story',
        component: ArticleComponent
      },
      {
        path: 'video',
        component: VideoComponent
      }
    ]),
    NgbModule.forRoot()
  ],
  providers: [
    GetArticleDataService,
    GetVideoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
