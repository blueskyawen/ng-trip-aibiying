import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-view-quality',
  templateUrl: './plus-view-quality.component.html',
  styleUrls: ['./plus-view-quality.component.less']
})
export class PlusViewQualityComponent implements OnInit {
  quatyImages: string[] = [
      'https://a0.muscache.com/4ea/air/v2/pictures/SelectGuestLandingPage/verified_background_comfortable/o' +
      'riginal/2a2bf531-c4ad-4207-b371-5f7a65114092.jpg',
      'https://a0.muscache.com/4ea/air/v2/pictures/SelectGuestLandingPage/verified_background_equipped/original/6b489' +
      '3aa-09a2-419c-8acc-da3b09ca8f18.jpg',
      'https://a0.muscache.com/4ea/air/v2/pictures/SelectGuestLandingPage/verified_background_maintained/original/866' +
      '2ebac-2eb8-4caf-a2cb-83b50f1f49dd.jpg',
      'https://a0.muscache.com/4ea/air/v2/pictures/SelectGuestLandingPage/verified_background_designed/original/4475' +
      'a8f8-5116-4cd4-a7ec-fa9968308af5.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
