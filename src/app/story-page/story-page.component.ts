import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-page',
  templateUrl: './story-page.component.html',
  styleUrls: ['./story-page.component.less','./story-page.css']
})
export class StoryPageComponent implements OnInit {
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
  constructor() {
    this.curTab = this.storyTabs[0].label;
  }

  ngOnInit() {
  }

  isShowOtherTabs() {
    return ['house resource','scenic spot','cate','custom culture','activity','shop'].includes(this.curTab);
  }
}

