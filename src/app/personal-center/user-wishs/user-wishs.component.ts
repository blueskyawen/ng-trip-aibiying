import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../home-page/home-page.service';
import { SelfCenterService } from '../self-center.service';

@Component({
  selector: 'app-user-wishs',
  templateUrl: './user-wishs.component.html',
  styleUrls: ['./user-wishs.component.less']
})
export class UserWishsComponent implements OnInit {
  showLoading: boolean = false;
  isShowAdd: boolean = false;
  myWishs: any[] = [];
  hotWishs: any[] = [];
  showMyload: boolean = false;
  constructor(public homePageService: HomePageService,private selfCenterService: SelfCenterService) { }

  ngOnInit() {
    this.showLoading = true;
    this.homePageService.getWishList().subscribe(res => {
      res.wishList.forEach(item => {
        this.myWishs.push({
          id: item.id,
          name: item.data.name,
          photo: item.data.projects.length !== 0 ? item.data.projects[0].imgs[0] : '',
          projects: item.data.projects
        });
      });
      setTimeout(() => {this.showLoading = false;}, 1000);
    });
    this.selfCenterService.getHotWishs().subscribe(res => {
      this.hotWishs = res.slice(0, 6);
      for(let index = 1;index < this.hotWishs.length;index++) {
        this.hotWishs[index].projects = this.hotWishs[0].projects;
      }
    });
  }

  addChange(name: string) {
    if(name) {
      this.homePageService.getWishList().subscribe(res => {
        this.homePageService.wishList = res.wishList.slice(0, 3);
        let newWish = res.wishList.find(item => {return item.data.name === name;});
        if(newWish) {
          this.myWishs.push({
            id: newWish.id,
            name: newWish.data.name,
            photo: newWish.data.projects.length !== 0 ? newWish.data.projects[0].imgs[0] : '',
            projects: newWish.data.projects
          });
        }
        this.showMyload = true;
        setTimeout(() => {this.showMyload = false;}, 100);
      });
    }
  }
}
