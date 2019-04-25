import { Injectable } from '@angular/core';
import { Observable, of, EMPTY, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from '../core/storage.service';
import { PageRegisterLoginService } from '../home-page/page-register-login/page-register-login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  tableName: string = 'wish-list';
  wishList: any[] = [];
  constructor(private http: HttpClient,
              private storageService: StorageService,
              public pageRegisterLoginService: PageRegisterLoginService) { }

  addWish(url: string, data: any): Observable<any> {
    let wishs: any;
    let curHoster = this.getCurUser();
    let tmpWishs = this.storageService.get(this.tableName);
    if(tmpWishs) {
      wishs = JSON.parse(tmpWishs);
      let userWish = wishs.list.find(wish => {return wish.owner === curHoster.name;});
      if(userWish) {
        let id = userWish.wishList[userWish.wishList.length - 1].id;
        userWish.wishList.push({
          id: id + 1,
          data: data
        });
      } else {
        wishs.list.push({
          owner: curHoster.name,
          wishList: [
            {
              id: 1,
              data: data
            }
          ]
        });
      }
    } else {
      wishs = {
        list: [
          {
            owner: curHoster.name,
            wishList: [
              {
                id: 1,
                data: data
              }
            ]
          }
        ]
      };
    }

    this.storageService.set(this.tableName,JSON.stringify(wishs));
    return of({status: 'success'});
  }

  getWishList(): Observable<any> {
    let curHoster = this.getCurUser();
    let tmpWish = JSON.parse(this.storageService.get(this.tableName));
    if(tmpWish) {
      let userWish = tmpWish.list.find(wish => {return wish.owner === curHoster.name;});
      return userWish ? of(userWish) : of({owner: curHoster.name, wishList: []});
    } else {
      return of({owner: curHoster.name, wishList: []});
    }
  }

  getOneWish(id: string): Observable<any> {
    let curHoster = this.getCurUser();
    let tmpWish = JSON.parse(this.storageService.get(this.tableName));
    if(tmpWish) {
      let userWish = tmpWish.list.find(item => {return item.owner === curHoster.name;});
      if(userWish) {
        let wish = userWish.wishList.find(wish => {return wish.id == id;});
        return of({owner: curHoster.name, wish: wish});
      } else {
        return of({owner: curHoster.name, wish: null});
      }
    } else {
      return of({owner: curHoster.name, wish: null});
    }
  }

  delOneWish(id: string): Observable<any> {
    let curHoster = this.getCurUser();
    let tmpWish = JSON.parse(this.storageService.get(this.tableName));
    if(tmpWish) {
      let userWish = tmpWish.list.find(item => {return item.owner === curHoster.name;});
      if(userWish) {
        let wish = userWish.wishList.find(wish => {return wish.id == id;});
        if(wish) {
          userWish.wishList = userWish.wishList.filter(item => {
            return item.id.toString() !== id.toString();
          });
          this.storageService.set(this.tableName,JSON.stringify(tmpWish));
          return of(true);
        } else {
          return of(true);
        }
      } else {
        return of(true);
      }
    } else {
      return of(true);
    }
  }

  getCurUser() {
    if(this.pageRegisterLoginService.curloginedUser) {
      return this.pageRegisterLoginService.curloginedUser;
    } else {
      return JSON.parse(this.storageService.get('curLoginUser'));
    }
  }
}
