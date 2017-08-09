import { Component, OnInit } from '@angular/core';

//Services
import { GetVideoDataService } from '../services/get-video-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoObjData: any;

  constructor(private dataService:GetVideoDataService) {
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
      this.videoObjData.title = data.Title;
      this.videoObjData.excerpt = data.Excerpt;

      for(let key in data.Pages) {
        this.videoObjData.pageData.push(data.Pages[key]);
      }

      //On render, start the video if it is in view.
      setTimeout(() => {
        this.checkVideoInView();
      }, 500);

      document.addEventListener("scroll", () => {
        this.checkVideoInView();
      });
    })
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

}
