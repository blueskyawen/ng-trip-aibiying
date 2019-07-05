import { Component, OnInit } from '@angular/core';
import { PageContentService } from './page-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-inspiration',
  templateUrl: './page-inspiration.component.html',
  styleUrls: ['./page-inspiration.component.less']
})
export class PageInspirationComponent implements OnInit {
  tripList: any[] = [];
  showLoading : boolean = false;
  constructor(private pageContentService: PageContentService, private router: Router) { }

  ngOnInit() {
    this.pageContentService.getSakuraTrips().subscribe(res => {
      this.tripList = res;
    });
  }

  goTripDetai(item: any) {
    if(item.id === 1) {
      this.router.navigate(['/exhibit/playlist', '11']);
    } else {
      this.router.navigate(['/exhibit/playlist', '22']);
    }
  }
}
