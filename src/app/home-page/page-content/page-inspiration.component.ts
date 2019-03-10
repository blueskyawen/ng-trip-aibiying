import { Component, OnInit } from '@angular/core';
import { PageContentService } from './page-content.service';

@Component({
  selector: 'app-page-inspiration',
  templateUrl: './page-inspiration.component.html',
  styleUrls: ['./page-inspiration.component.less']
})
export class PageInspirationComponent implements OnInit {
  tripList: any[] = [];
  constructor(private pageContentService: PageContentService) { }

  ngOnInit() {
    this.pageContentService.getSakuraTrips().subscribe(res => {
      this.tripList = res;
    });
  }

  goTripDetai() {
    window.alert('goTripDetai!');
  }
}
