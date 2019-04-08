import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { StorageService } from '../../core/storage.service';
import { CoreService } from '../../core/core.service';
import { DbStorageService } from '../../core/db-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PageRegisterLoginService {

  constructor(private storageService: StorageService,
              public coreService: CoreService,
              public dbStorageService: DbStorageService) { }

  registerUserByIndexDB(url: string, data: any,
                        succFunc: Function, failFunc: Function): Observable<any> {
    this.dbStorageService.add('users', data, succFunc, failFunc);
    return of({});
  }

  getUser(name: string) {
    this.dbStorageService.read('users', name);
  }

  registerUser(url, data): Observable<any> {
    let tmpUsers = [];
    if (this.storageService.get('users')) {
      tmpUsers = JSON.parse(this.storageService.get('users'));
    }
    tmpUsers.push(data);
    this.storageService.set('users',JSON.stringify(tmpUsers));
    return of({});
  }

  loginOnUser(url: string, user : any): Observable<boolean> {
    if(this.storageService.get('users')) {
      let users = JSON.parse(this.storageService.get('users'));
      let loginUser = users.find((item : any) => {
        return item.name === user.name && item.password === user.password;
      });
      if(loginUser) {
        loginUser.logined = true;
        this.coreService.isLogin = true;
        this.storageService.set('users',JSON.stringify(users));
        return of(true);
      } else {
        return of(false);
      }
    } else {
      return of(false);
    }
  }

  loginOffUser(name: string): Observable<boolean> {
    if(this.storageService.get('users')) {
      let users = JSON.parse(this.storageService.get('users'));
      let loginUser = users.find((item : any) => {
        return item.name === name && item.logined;
      });
      if(loginUser) {
        loginUser.isLogined = false;
        this.coreService.isLogin = false;
        this.storageService.set('users',JSON.stringify(users));
      }
    }
    return of(true);
  }
}
