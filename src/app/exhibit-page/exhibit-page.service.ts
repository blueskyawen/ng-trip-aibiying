import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExhibitPageService {

  constructor(private http: HttpClient) { }

  getPlatList(city ?: string) {
    if(city && city === 'London') {
      return this.http.get('assets/city-detail-list.json').pipe(
          map(res => {
            res['cityList'].forEach(city => {
              city.houses.forEach(house => {house['good_press'] = house.star;});
            });
            return res['cityList'][0]['houses'] || [];
          })
      );
    } else {
      return this.http.get('assets/exhibit-play-list.json').pipe(
          map(res => res['playList'] || [])
      );
    }
  }

  getHouseData(id: number) {
    return this.http.get('assets/house-detail-list.json').pipe(
        map(res => res['list'][id] || {})
    );
  }

}
