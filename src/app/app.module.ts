import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

//Services
import { GetArticleDataService } from './services/get-article-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [GetArticleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
