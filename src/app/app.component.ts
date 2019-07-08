import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ng-trip-aibiying';
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // @ts-ignore
      window.pageYOffset = 0;
    });
  }
}
