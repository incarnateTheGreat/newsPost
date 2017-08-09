import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetVideoDataService {
  constructor(public http:Http) {}

  getData() {
    const url = 'https://cdn.diply.com/json/video/office-pet-gone-wrong-video.json';

    return this.http.get(url).map(res => res.json());
  }
}
