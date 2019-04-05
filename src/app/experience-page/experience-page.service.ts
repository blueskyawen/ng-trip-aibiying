import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperiencePageService {

  constructor(private http: HttpClient) { }

  getExperienceList() {
    return this.http.get('assets/experience-list.json').pipe(
        map(res => res['list'] || [])
    );
  }

  getCityExperList() {
    return this.http.get('assets/city-detail-list.json').pipe(
        map(res => {
            let tempList = res['cityList'][0]['experiences'] || [];
            if(tempList.length !== 0) {
                tempList.forEach(tempItem => {
                    tempItem.city = 'London';
                });
            }
            return tempList;
        })
    );
  }

    getExperThemeList() {
        return this.http.get('assets/exper-theme-list.json').pipe(
            map(res => res['list'] || [])
        );
    }

  getExpersAndThemes() {
      return forkJoin(this.getExperienceList(), this.getExperThemeList()).pipe(
          map((data: any) => {
              let tempData = {
                shanghai: [],
                hangzhou: [],
                highPress: [],
                theme: data[1]
              };
              tempData.highPress = data[0].filter(item => {return item.highPress;}).slice(0, 6);
              tempData.shanghai = data[0].filter(item => {return item.city === 'Shanghai';}).slice(0, 6);
              tempData.hangzhou = data[0].filter(item => {return item.city === 'Hangzhou';}).slice(0, 6);
              return tempData;
          })
      );
  }

  getAllExperiences() {
    return forkJoin(this.getExperienceList(), this.getCityExperList()).pipe(
        map((data: any) => {
          data[0] = data[0].concat(data[1]);
          return data[0];
        })
    );
  }
}
