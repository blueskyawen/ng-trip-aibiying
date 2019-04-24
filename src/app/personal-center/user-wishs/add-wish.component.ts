import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HomePageService } from '../../home-page/home-page.service';

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.component.html',
  styleUrls: ['./add-wish.component.less','../../exhibit-page/house-detail-page/house-detail-page.css']
})
export class AddWishComponent implements OnInit {
  @Input() isDisplay: boolean = false;
  @Output() isDisplayChange = new EventEmitter<boolean>();
  @Output() addChange = new EventEmitter<string>();
  wishData: any = {
    name: '',
    privacy: 'private',
    person: {adult: 0, child: 0, baby: 0}
  };
  privaOption: any[] = [
    {label: '仅限受邀用户',value: 'private',disable: false},
    {label: '每个人',value: 'public',disable: false}
  ];
  personData = '人数';
  isShowPersonSet: boolean = false;

  showMsg: boolean = false;
  showErrorMsg: boolean = false;
  constructor(private homePageService: HomePageService) { }

  ngOnInit() {
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
    this.addChange.emit(this.wishData.name);
  }

  disableAdd() {
    return !this.wishData.name;
  }

  addWish() {
    let addWishData = {
      name: this.wishData.name,
      privacy: this.wishData.privacy,
      person: this.wishData.person,
      projects: []
    };
    this.homePageService.addWish('/api/wish/add', addWishData).subscribe(res => {
      if(res.status === 'success') {
        this.setSucess();
      } else {
        this.setFail();
      }
    });
  }

  setSucess() {
    this.showMsg = true;
    setTimeout(() => {
      this.isDisplay = false;
      this.isDisplayChange.emit(this.isDisplay);
      this.addChange.emit(this.wishData.name);
    },1000);
  }

  setFail() {
    this.showErrorMsg = true;
  }

  cancel() {
    this.isDisplay = false;
    this.isDisplayChange.emit(this.isDisplay);
    this.addChange.emit();
  }

  openPersonSet() {
    this.isShowPersonSet = !this.isShowPersonSet;
  }

  personChange(item: any) {
    if(item) {
      this.personData = (this.wishData.person.adult + this.wishData.person.child) + '人, ' +
          this.wishData.person.baby + '名婴幼儿';
      this.isShowPersonSet = false;
    } else {
      this.wishData.person.adult = 0;
      this.wishData.person.child = 0;
      this.wishData.person.baby = 0;
      this.personData = '人数';
      this.isShowPersonSet  = false;
    }
  }
}
