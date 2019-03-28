import { Component, OnInit } from '@angular/core';
import { PlusPageService } from '../plus-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus-dest-list',
  templateUrl: './plus-dest-list.component.html',
  styleUrls: ['./plus-dest-list.component.less']
})
export class PlusDestListComponent implements OnInit {
  destList: any[] = [
    {
      continent:'North America',
      continent_zh:'北美洲',
      cityList: []
    },
    {
      continent:'Europe',
      continent_zh:'欧洲',
      cityList: []
    },
    {
      continent:'Asia',
      continent_zh:'亚洲',
      cityList: []
    },
    {
      continent:'Oceania',
      continent_zh:'大洋洲',
      cityList: []
    },
    {
      continent:'Africa',
      continent_zh:'非洲',
      cityList: []
    }
  ];
  contIndex: any = {
    'North America': 0, 'Europe': 1, 'Asia': 2, 'Oceania': 3, 'Africa': 4
  };
  showLoading: boolean = false;
  constructor(private plusPageService: PlusPageService,
              private router: Router) { }

  ngOnInit() {
    this.showLoading = true;
    this.plusPageService.getPlusDestList().subscribe(res => {
      this.setDestList(res);
      this.showLoading = false;
    });
  }

  setDestList(items: any[]) {
    items.forEach(item => {
      this.destList[this.contIndex[item.continent_en]].cityList.push(item);
    });
  }

}
