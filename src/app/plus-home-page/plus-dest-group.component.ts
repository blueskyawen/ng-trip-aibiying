import { Component, OnInit, Input } from '@angular/core';
import { PlusPageService } from './plus-page.service';

@Component({
  selector: 'app-plus-dest-group',
  templateUrl: './plus-dest-group.component.html',
  styleUrls: ['./plus-dest-group.component.less']
})
export class PlusDestGroupComponent implements OnInit {
  destList: any[] = [];
  showLoading: boolean = false;
  constructor(private plusPageService: PlusPageService) { }

  ngOnInit() {
    this.showLoading = true;
    this.plusPageService.getPlusDestList().subscribe(res => {
      this.destList = res.slice(0, 6);
      this.showLoading = false;
    });
  }

  goPlusDest(dest: any) {
    console.log(dest.city_zh);
  }

}
