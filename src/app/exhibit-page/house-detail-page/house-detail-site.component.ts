import {Component, Input, OnInit} from '@angular/core';
import {
  ControlAnchor, MapOptions, MapTypeControlOptions, MapTypeControlType,
  NavigationControlOptions, NavigationControlType, MarkerOptions, Animation,
  MapTypeEnum, CircleOptions, Point, BCircle, BMarker, BMapInstance
} from 'angular2-baidu-map'

@Component({
  selector: 'app-house-detail-site',
  templateUrl: './house-detail-site.component.html',
  styleUrls: ['./house-detail-site.component.less']
})
export class HouseDetailSiteComponent implements OnInit {
  @Input() houseData: any;
  options: MapOptions;
  mapInstance: any;
  public controlOpts: NavigationControlOptions;
  public mapTypeOpts: MapTypeControlOptions;
  public center: Point;
  public circleOptions: CircleOptions;
  circleIntance: any;

  public markers: Array<{ point: Point; options?: MarkerOptions }>;
  makerInstances: any[] = [];

  constructor() { }

  ngOnInit() {
    this.options = {
      centerAndZoom: {
        lat: 30.3079558877,
        lng: 120.0734048203,
        zoom: 15
      },
      enableKeyboard: true
    };
    this.addNavigationControl();
    this.addMapTypes();
    this.addCircle();
    this.addMarker();
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

  addCircle() {
    this.center = {
      lat: 30.3079558877,
      lng: 120.0734048203,
    };

    this.circleOptions = {
      strokeColor: 'blue',
      strokeWeight: 2,
      strokeOpacity:0.3
    };
  }

  addMarker() {
    this.markers = [
      {
        point: {
          lat: 30.3079558877,
          lng: 120.0734048203,
        }
      }
    ]
  }

  circleLoaded(circle: BCircle) {
    this.circleIntance = circle;
  }

  markerLoaded(marker: BMarker) {
    this.makerInstances.push(marker);
    this.makerInstances[0].setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
  }

}
