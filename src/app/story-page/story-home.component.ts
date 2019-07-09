import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-story-home',
  templateUrl: './story-home.component.html',
  styleUrls: ['./story-home.component.less', './story-page.css']
})
export class StoryHomeComponent implements OnInit {
  storyTabs: any[] = [
    {name:'精选',label:'carefully chosen',isActive:true,isDisable:false},
    {name:'房源',label:'house resource',isActive:false,isDisable:false},
    {name:'景点',label:'scenic spot',isActive:false,isDisable:false},
    {name:'美食',label:'cate',isActive:false,isDisable:false},
    {name:'文化',label:'custom culture',isActive:false,isDisable:false},
    {name:'活动',label:'activity',isActive:false,isDisable:false},
    {name:'店铺',label:'shop',isActive:false,isDisable:false}
  ];
  curTab: string = '';
  isShowOtherTab: boolean = false;
  showLoading: boolean = false;
  constructor() {
    this.curTab = this.storyTabs[0].label;
  }

  ngOnInit() {
    this.showLoading = true;
    setTimeout(() => {
      this.showLoading = false;
    }, 500);
  }


  selectTabChange() {
    if(this.isInwOtherTabs()) {
      if(!this.isShowOtherTab) {
        this.isShowOtherTab = true;
      } else {
        this.isShowOtherTab = false;
        setTimeout(() => {this.isShowOtherTab = true;},100);
      }
    } else{
      this.isShowOtherTab = false;
    }
  }

  isInwOtherTabs() {
    return ['house resource','scenic spot','cate','custom culture','activity','shop'].includes(this.curTab);
  }
}
