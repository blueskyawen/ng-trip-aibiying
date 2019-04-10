import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { StorageService } from '../../core/storage.service';
import { CoreService } from '../../core/core.service';
import { DbStorageService } from '../../core/db-storage.service';

export class AuthData {
  name: string;
  password: string;
  constructor(name: string,password: string) {
    this.name = name;
    this.password = password;
  }
}

export class LocalStorageAuth {
  constructor(public storageService: StorageService) {}

  register(url: string, data: AuthData) {
    let tmpUsers = [];
    if (this.storageService.get('users')) {
      tmpUsers = JSON.parse(this.storageService.get('users'));
    }
    tmpUsers.push(data);
    this.storageService.set('users',JSON.stringify(tmpUsers));
  }

  loginOn(url: string, data : AuthData): boolean {
    if(this.storageService.get('users')) {
      let users = JSON.parse(this.storageService.get('users'));
      let loginUser = users.find((item : any) => {
        return item.name === data.name && item.password === data.password;
      });
      if(loginUser) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  loginOff(name: string) : boolean {
    if(this.storageService.get('users')) {
      let users = JSON.parse(this.storageService.get('users'));
      let loginUser = users.find((item : any) => {
        return item.name === name;
      });
      if(loginUser) {
        this.storageService.set('users',JSON.stringify(users));
      }
    }
    return true;
  }

  getUser(name: string): any {
    if(this.storageService.get('users')) {
      let users = JSON.parse(this.storageService.get('users'));
      let loginUser = users.find((item : any) => {
        return item.name === name;
      });
      if(loginUser) {
        return loginUser;
      }
    }
    return null;
  }

  getUserList(): any[] {
    if(this.storageService.get('users')) {
      return JSON.parse(this.storageService.get('users'));
    }
    return [];
  }

  modUser(name: string, data: any) : boolean {
    if(this.storageService.get('users')) {
      let users = JSON.parse(this.storageService.get('users'));
      let loginUser = users.find((item : any) => {
        return item.name === name;
      });
      if(loginUser) {
        loginUser.name = data.name;
        loginUser.password = data.password;
      }
    }
    return true;
  }

  deleteUser(name: string) : boolean {
    if(this.storageService.get('users')) {
      let users = JSON.parse(this.storageService.get('users'));
      users = users.filter((item : any) => {
        return item.name !== name;
      });
      this.storageService.set('users',JSON.stringify(users));
    }
    return true;
  }

  clear() : boolean {
    if(this.storageService.get('users')) {
      this.storageService.set('users',JSON.stringify([]));
    }
    return true;
  }
}

export class IndexDBAuth {
  constructor(public dbStorageService: DbStorageService) {}

  register(url: string, data: AuthData, succFunc: Function, failFunc: Function) {
    this.dbStorageService.add('users', data, succFunc, failFunc);
  }

  loginOn(url: string, data : AuthData, succFunc: Function, failFunc: Function) {
    this.dbStorageService.read('users', data.name, succFunc, failFunc);
  }

  loginOff(name: string): Observable<boolean> {
    return of(true);
  }

  getUser(url: string, name: string, succFunc: Function, failFunc: Function) {
    this.dbStorageService.read('users', name, succFunc, failFunc);
  }

  getAllUser(url: string, succFunc: Function, failFunc: Function) {
    this.dbStorageService.readAll('users', succFunc, failFunc);
  }

  modUser(url: string, name: string, data: any, succFunc: Function, failFunc: Function) {
    this.dbStorageService.update('users', name, data, succFunc, failFunc);
  }

  deleteUser(url: string, name: string, succFunc: Function, failFunc: Function) {
    this.dbStorageService.remove('users', name, succFunc, failFunc);
  }

  clear(url: string, succFunc: Function, failFunc: Function) {
    this.dbStorageService.clear('users', succFunc, failFunc);
  }
}


@Injectable({
  providedIn: 'root'
})
export class PageRegisterLoginService {
  isLogined: boolean = false;
  curloginedUser: AuthData = null;
  regisgterSub$ = new Subject<string>();
  loginSub$ = new Subject<string>();
  getUserSub$ = new Subject<any>();
  getUserListSub$ = new Subject<any>();
  deleteSub$ = new Subject<string>();

  private localAuth: LocalStorageAuth;
  private indexDbAuth: IndexDBAuth;

  authType: string = 'indexDB';

  constructor(private storageService: StorageService,
              private dbStorageService: DbStorageService) {
    this.localAuth = new LocalStorageAuth(this.storageService);
    this.indexDbAuth = new IndexDBAuth(this.dbStorageService);
  }

  isLocalAuth() {
    return this.authType === 'localStorage';
  }

  getCurLoginUser() {
    return this.curloginedUser;
  }

  registerUser(url: string, data: any): Observable<any> {
    if(this.authType === 'localStorage') {
      this.localAuth.register(url, data);
      return of({status: 'success'});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.register(url, data,
          () => {this.procRegisSuccess();}, () => {this.procRegisFail();});
      return of({});
    }
  }

  procRegisSuccess() {
    this.regisgterSub$.next('success');
  }

  procRegisFail() {
    this.regisgterSub$.next('fail');
  }

  loginUser(url: string, data: any): Observable<any> {
    if(this.authType === 'localStorage') {
      if(this.localAuth.loginOn(url, data)) {
        this.isLogined = true;
        return of({status: 'success'});
      } else {
        this.isLogined = false;
        return of({status: 'fail'});
      }
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.loginOn(url, data,
          (user) => {this.procLoginSuccess(user);}, (user) => {this.procLoginFail(user);});
      return of({});
    }
  }

  procLoginSuccess(user: any) {
    this.curloginedUser = user;
    this.isLogined = true;
    this.saveLoginUserStorage();
    this.loginSub$.next('success');
  }

  procLoginFail(user) {
    this.curloginedUser = user;
    this.isLogined = false;
    this.saveLoginUserStorage();
    this.loginSub$.next('fail');
  }

  saveLoginUserStorage() {
    this.storageService.set('curLoginUser',JSON.stringify(this.curloginedUser));
  }

  getLoginUserStorage() {
    if(!this.curloginedUser) {
      this.curloginedUser = JSON.parse(this.storageService.get('curLoginUser'));
      this.isLogined = !!this.curloginedUser;
    }
    return {user: this.curloginedUser, isLogin: this.isLogined};
  }

  loginOffUser(url: string): Observable<any> {
    this.isLogined = false;
    this.curloginedUser = null;
    this.saveLoginUserStorage();
    return of({});
  }

  getUserInfo(url: string,name: string): Observable<any> {
    if(this.authType === 'localStorage') {
      let userData = this.localAuth.getUser(name);
      return of({user: userData});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.getUser(url, name,
          (user) => {this.procGetUserSuccess(user);}, (user) => {this.procGetUserFail(user);});
      return of({});
    }
  }

  procGetUserSuccess(user: any) {
    this.getUserSub$.next({user: user});
  }

  procGetUserFail(user: any) {
    this.getUserSub$.next({user: user});
  }

  getUserList(url: string): Observable<any> {
    if(this.authType === 'localStorage') {
      let userData = this.localAuth.getUserList();
      return of({users: userData});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.getAllUser(url,
          (user) => {this.procGetUserListSuccess(user);}, () => {this.procGetUserListFail();});
      return of({});
    }
  }

  procGetUserListSuccess(users: any[]) {
    let tempUsers = users ? users : [];
    this.getUserListSub$.next({users: tempUsers});
  }

  procGetUserListFail() {
    this.getUserListSub$.next({users: []});
  }

  modifyItem(url: string,name: string, data: any): Observable<any> {
    if(this.authType === 'localStorage') {
       this.localAuth.modUser(name, data);
      return of({});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.modUser(url, name, data, () => {}, () => {});
      return of({});
    }
  }

  deleteItem(url: string,name: string): Observable<any> {
    if(this.authType === 'localStorage') {
      this.localAuth.deleteUser(name);
      return of({});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.deleteUser(url, name, () => {}, () => {});
      return of({});
    }
  }

  clearItems(url: string): Observable<any> {
    if(this.authType === 'localStorage') {
      this.localAuth.clear();
      return of({});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.clear(url, () => {}, () => {});
      return of({});
    }
  }

}
