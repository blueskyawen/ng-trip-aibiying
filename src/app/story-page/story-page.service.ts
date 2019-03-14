import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoryPageService {

  constructor(private http: HttpClient) { }

  getStoryRecommends() {
    return this.http.get('assets/recom-story-sites.json').pipe(
        map(res => res['siteList'] || [])
    );
  }

  getCityStoryList() {
    return this.http.get('assets/city-story-list.json').pipe(
        map(res => res['cityList'] || [])
    );
  }
}
