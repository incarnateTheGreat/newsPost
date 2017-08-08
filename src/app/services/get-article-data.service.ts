import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetArticleDataService {
  constructor(public http:Http) {}

  getData() {
    // const url = 'https://cdn.diply.com/json/fun-adam-sandler-facts.json';
    const url = '../assets/data.json'

    return this.http.get(url).map(res => res.json());
  }
}
