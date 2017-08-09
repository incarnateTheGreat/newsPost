import { Component, OnInit, OnDestroy } from '@angular/core';

//Services
import { GetVideoDataService } from '../services/get-video-data.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoObjData: any;

  constructor(private dataService:GetVideoDataService, private slimLoadingBarService: SlimLoadingBarService) {
    this.videoObjData = {
      title: '',
      excerpt: '',
      videoURL: '',
      pageData: []
    };
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log(data);

      this.startLoading();
      this.videoObjData.title = data.Title;
      this.videoObjData.excerpt = data.Excerpt;

      for(let key in data.Pages) {
        this.videoObjData.pageData.push(data.Pages[key]);
      }

      //On render, start the video if it is in view.
      setTimeout(() => {
        this.checkVideoInView();
        this.completeLoading();
      }, 500);

      window.addEventListener("scroll", this.checkVideoInView, true);
    })
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.checkVideoInView, true);
  }

  checkVideoInView() {
    const video = document.getElementsByTagName("video")[0],
          elementPosTop = video.offsetTop,
          viewportHeight = window.innerHeight;

    let scrollPos = document.getElementsByTagName("html")[0].scrollTop,
        elementFromTop = elementPosTop - scrollPos;

    //If the video is in view, then begin playing.
    if (elementFromTop > 0 && elementFromTop < elementPosTop + viewportHeight) {
        video.play();
    } else {
        video.pause();
    }
  }

  startLoading() {
    this.slimLoadingBarService.start();
  }

  stopLoading() {
    this.slimLoadingBarService.stop();
  }

  completeLoading() {
    this.slimLoadingBarService.complete();
  }
}
