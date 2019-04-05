import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ExperiencePageService } from './experience-page.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.less']
})
export class ExperienceListComponent implements OnInit {
  type: string = '';
  city: string = '';
  theme: string = '';
  isShowCategory: boolean = false;
  showLoading: boolean = true;
  showExpersLoading: boolean = true;
  allExperList: any[] = [];
  showExperAllList: any[] = [];
  showExperList: any[] = [];
  curIndex: number = 0;
  timerId: any = undefined;
  themeInfo: any;
  constructor(private route: ActivatedRoute,
              private experPageService: ExperiencePageService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type');
      this.city = params.get('city');
      this.theme = params.get('theme');
      this.showLoading = true;
      this.getThemePhoto();
      this.getShowExperiences();
    });
  }

    getThemePhoto() {
      if(!this.theme) {
          return;
      }
        this.experPageService.getExperThemeList().subscribe(res => {
            this.themeInfo = res.find(item => item.categroy === this.type);
        });
    }

    getShowExperiences() {
        this.showExperList = [];
        this.curIndex = 0;
        this.clearTimer();
        this.experPageService.getAllExperiences().subscribe(res => {
            this.allExperList = res;
            this.initShowExperList();
            this.showLoading = false;
        });
    }

    initShowExperList() {
      if (this.type === 'all') {
          if (this.city === 'all') {
            this.allExperList = [];
          } else {
            this.isShowCategory = true;
            this.showExperAllList = this.allExperList.filter(item => item.city === this.city);
          }
      } else {
          this.isShowCategory = false;
          if (this.city === 'all') {
              this.showExperAllList = this.allExperList.filter(item => {
                  return this.type === item.categroy;
              });
          } else {
              this.showExperAllList = this.allExperList.filter(item => {
                  return item.city === this.city && this.type === item.categroy;
              });
          }
      }
      this.setShowExperList(this.showExperAllList);
      console.log(this.showExperAllList);
    }

    setShowExperList(items: any[]) {
      console.log('this.timerId=='+this.timerId);
        if(items.length === 0) {
            this.showExpersLoading = false;
            return;
        }
        for(let index = 0;index < 8;index++) {
            this.showExperList.push(items[this.curIndex]);
            this.curIndex++;
            if(this.curIndex >= items.length) {
                break;
            }
        }
        if(this.curIndex >= items.length) {
            this.showExpersLoading = false;
        } else {
            this.timerId = setTimeout(() => {
                this.setShowExperList(items);
            },3000);
        }
    }

    clearTimer() {
      if(this.timerId) {
          clearTimeout(this.timerId);
          this.timerId = undefined;
      }
    }

}
