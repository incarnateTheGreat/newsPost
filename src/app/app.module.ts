import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

//Components
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleImageComponent } from './article/article-image/article-image.component';
import { ArticleTextComponent } from './article/article-text/article-text.component';
import { ArticleAdComponent } from './article/article-ad/article-ad.component';
import { VideoComponent } from './video/video.component';

//Services
import { GetArticleDataService } from './services/get-article-data.service';
import { GetVideoDataService } from './services/get-video-data.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleImageComponent,
    ArticleTextComponent,
    ArticleAdComponent,
    VideoComponent,
    NavComponent
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
    NgbModule.forRoot(),
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    GetArticleDataService,
    GetVideoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
