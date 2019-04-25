import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SelfCenterService } from '../self-center.service';
import { HomePageService } from '../../home-page/home-page.service';

@Component({
  selector: 'app-wish-detail',
  templateUrl: './wish-detail.component.html',
  styleUrls: ['./wish-detail.component.less']
})
export class WishDetailComponent implements OnInit {
  showLoading: boolean = false;
  wish: any = {
    'id': '',
    'name': '',
    'photo': '',
    'privacy': 'public',
    'person': {'adult': 2, 'child': 0, 'baby': 0},
    'projects': []
  };
  wishId: number;
  type: string;
  isShowDel: boolean = false;
  showMsg: boolean = false;
  constructor(private selfCenterService: SelfCenterService,
              private homePageService: HomePageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.wishId = +params.get('id');
      this.type = params.get('type');
      this.showLoading = true;
      if(this.type === 'hot') {
        this.selfCenterService.getHotWishById(this.wishId).subscribe(res => {
          this.wish = res;
          setTimeout(() => {this.showLoading = false;}, 1000);
        });
      } else {
        this.homePageService.getOneWish(this.wishId.toString()).subscribe(res => {
          if(res.wish) {
            this.wish.id = res.wish.id;
            this.wish.name = res.wish.data.name;
            this.wish.privacy = res.wish.data.privacy;
            this.wish.person = res.wish.data.person;
            this.wish.projects = res.wish.data.projects;
          }
          setTimeout(() => {this.showLoading = false;}, 1000);
        });
      }
    });
  }

  deleteWish() {
    this.isShowDel = true;
  }

  deleteConfirm() {
    this.homePageService.delOneWish(this.wishId.toString()).subscribe(res => {
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
        this.isShowDel = false;
        this.router.navigate(['/selfCenter/wishs']);
      }, 2000);
    });
  }

  cancel() {
    this.isShowDel = false;
  }
}
