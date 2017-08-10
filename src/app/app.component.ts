import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    window.addEventListener("scroll", this.scroll, true);
  }

  scroll() {
    const scrollPos = document.getElementsByTagName("html")[0].scrollTop,
          nextButton = document.getElementsByClassName('nextButton_small')[0];

    if(scrollPos > 100) {
      nextButton.classList.add('show');
    } else {
      nextButton.classList.remove('show');
    }
  }
}
