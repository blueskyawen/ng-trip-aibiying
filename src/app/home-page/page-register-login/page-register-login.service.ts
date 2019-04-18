import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { StorageService } from '../../core/storage.service';
import { CoreService } from '../../core/core.service';
import { DbStorageService} from '../../core/db-storage.service';
import { LocalStorageAuth, IndexDBAuth, AuthData} from '../../core/storage-auth';

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
  tableName: string = 'users';

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
      this.localAuth.register(this.tableName, url, data);
      return of({status: 'success'});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.register(this.tableName, url, data,
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
      if(this.localAuth.loginOn(this.tableName, url, data)) {
        this.isLogined = true;
        return of({status: 'success'});
      } else {
        this.isLogined = false;
        return of({status: 'fail'});
      }
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.loginOn(this.tableName, url, data,
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
      let userData = this.localAuth.getUser(this.tableName, name);
      return of({user: userData});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.getUser(this.tableName, url, name,
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
      let userData = this.localAuth.getUserList(this.tableName);
      return of({users: userData});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.getAllUser(this.tableName, url,
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
       this.localAuth.modUser(this.tableName, name, data);
      return of({});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.modUser(this.tableName, url, name, data, () => {}, () => {});
      return of({});
    }
  }

  deleteItem(url: string,name: string): Observable<any> {
    if(this.authType === 'localStorage') {
      this.localAuth.deleteUser(this.tableName, name);
      return of({});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.deleteUser(this.tableName, url, name, () => {}, () => {});
      return of({});
    }
  }

  clearItems(url: string): Observable<any> {
    if(this.authType === 'localStorage') {
      this.localAuth.clear(this.tableName);
      return of({});
    }

    if(this.authType === 'indexDB') {
      this.indexDbAuth.clear(this.tableName, url, () => {}, () => {});
      return of({});
    }
  }

}
