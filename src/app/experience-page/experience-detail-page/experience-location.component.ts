import { Component, OnInit } from '@angular/core';
import {
  ControlAnchor, MapOptions, MapTypeControlOptions, MapTypeControlType,
  NavigationControlOptions, NavigationControlType, MarkerOptions,
  MapTypeEnum
} from 'angular2-baidu-map'

@Component({
  selector: 'app-experience-location',
  templateUrl: './experience-location.component.html',
  styleUrls: ['./experience-location.component.less']
})
export class ExperienceLocationComponent implements OnInit {
  options: MapOptions;
  mapInstance: any;
  public controlOpts: NavigationControlOptions;
  public mapTypeOpts: MapTypeControlOptions;

  constructor() { }

  ngOnInit() {
    this.options = {
      centerAndZoom: {
        lat: 30.2287070000,
        lng: 120.1306700000,
        zoom: 12
      },
      enableKeyboard: true
    };
    this.addNavigationControl();
    this.addMapTypes();
  }

  mapLoaded(emap: any) {
    this.mapInstance = emap;
  }

  addNavigationControl() {
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL,
      enableGeolocation: true
    };
  }

  addMapTypes() {
    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP,
      mapTypes: [MapTypeEnum.BMAP_NORMAL_MAP, MapTypeEnum.BMAP_SATELLITE_MAP]
    }
  }

}
