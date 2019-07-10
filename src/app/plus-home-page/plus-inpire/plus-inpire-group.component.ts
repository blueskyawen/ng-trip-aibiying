import { Component, OnInit } from '@angular/core';
import { PlusPageService } from '../plus-page.service';

@Component({
  selector: 'app-plus-inpire-group',
  templateUrl: './plus-inpire-group.component.html',
  styleUrls: ['./plus-inpire-group.component.less']
})
export class PlusInpireGroupComponent implements OnInit {
  inpireList: any[] = [];
  showLoading: boolean = false;
  constructor(private plusPageService: PlusPageService) { }

  ngOnInit() {
    this.showLoading = true;
    this.plusPageService.getPlusInspireList().subscribe(res => {
      this.inpireList = res;
      setTimeout(() => {this.showLoading = false;}, 200);
    });
  }

}
