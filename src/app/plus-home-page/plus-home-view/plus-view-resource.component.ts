import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-view-resource',
  templateUrl: './plus-view-resource.component.html',
  styleUrls: ['./plus-view-resource.component.less']
})
export class PlusViewResourceComponent implements OnInit {
  resoucelist: string[] = [
    'https://a0.muscache.com/4ea/air/v2/pictures/79197f72-a1e4-4ea2-9b3a-92745694722c.jpg',
    'https://a0.muscache.com/4ea/air/v2/pictures/f52c41c8-0254-4ec6-9121-2affecc2ce05.jpg',
    'https://a0.muscache.com/4ea/air/v2/pictures/71c5e300-e175-4c54-9d9b-f0945892499b.jpg',
    'https://a0.muscache.com/4ea/air/v2/pictures/7aebec7a-5817-41d8-bfeb-da944026d76e.jpg',
    'https://a0.muscache.com/4ea/air/v2/pictures/0faf0599-9cd4-4d1d-b403-1f844b3f7547.jpg',
    'https://a0.muscache.com/4ea/air/v2/pictures/986b019b-bfa2-44db-a77e-511b9d6d741c.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
