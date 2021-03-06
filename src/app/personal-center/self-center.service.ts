/**
 * Created by root on 4/17/19.
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from '../core/storage.service';
import { PageRegisterLoginService } from '../home-page/page-register-login/page-register-login.service';

@Injectable({
    providedIn: 'root'
})
export class SelfCenterService {
    houseData: any = {
        type: {
            type: 'Entire house',
            person: 2,
            city: ''
        },
        basic: {
            houseType: 'Apartment',
            rentalType: 'Entire house',
            isShare: 1
        },
        room: {
            personNum: 2,
            num: 1,
            bedrooms: [
                {
                    id: 1,
                    beds: []
                }
            ]
        },
        toilet: 1,
        facility: [],
        site: {
            country: '',
            city: '',
            adress: ''
        }
    };
    bedOptions: any[] = [];
    publishSuccess: boolean = false;

    tableName: string = 'published-houses';
    publishSub$ = new Subject<string>();

    tableName2: string = 'user-data';
    defaultUserData = {
        message: {
            email: true, msgPush: false, phoneMsg: false
        },
        contact: {
            email: '******@163.com ', phoneMsg: '+86 *** **** 0560'
        },
        remind: {
            email: true, msgPush: true, phoneMsg: true
        },
        promote: {
            email: true, msgPush: true, phoneMsg: true, phone: false
        },
        pocity: {
            email: true, msgPush: false, phoneMsg: false, phone: false
        },
        support: {
            email: false, msgPush: false, phoneMsg: false
        },
        phoneMsg: {
            selectedPhone: '+86 *** **** 0560',
            phones: ['+86 *** **** 0560']
        }
    };

    constructor(private http: HttpClient,
                private storageService: StorageService,
                public pageRegisterLoginService: PageRegisterLoginService) {
    }

    getHouseTypes() {
        return this.http.get('assets/house-type-list.json').pipe(
            map(res => res['houseTypes'] || [])
        );
    }

    getBedTypes() {
        return this.http.get('assets/house-bed-types.json').pipe(
            map(res => res['types'] || [])
        );
    }

    getHouseFacilitys() {
        return this.http.get('assets/house-facilty.json').pipe(
            map(res => res['facilty'] || {})
        );
    }

    getHotWishs() {
        return this.http.get('assets/hot-wishs.json').pipe(
            map(res => res['wishs'] || [])
        );
    }

    getHotWishById(id: any) {
        return this.http.get('assets/hot-wishs.json').pipe(
            map(res => {
                let tmpWish = res['wishs'].find(item => {return item.id == id;});
                if(tmpWish) {
                    tmpWish.projects = res['wishs'][0].projects;
                }
                return tmpWish || {id: id, name: '', photo: '' , projects: []};
            })
        );
    }

    publishHouse(url: string, data: any): Observable<any> {
        let publishHouse: any;
        let curHoster = this.pageRegisterLoginService.curloginedUser;
        let tmpPublishHouse = this.storageService.get(this.tableName);
        if(tmpPublishHouse) {
            publishHouse = JSON.parse(tmpPublishHouse);
            let userHouse = publishHouse.list.find(house => {return house.owner === curHoster.name;});
            if(userHouse) {
                let id = userHouse.houses[userHouse.houses.length - 1].id;
                userHouse.houses.push({
                    id: id + 1,
                    name: `house_0${id + 1}`,
                    data: data
                });
            } else {
                publishHouse.list.push({
                    owner: curHoster.name,
                    houses: [
                        {
                            id: 1,
                            name: 'house_01',
                            data: data
                        }
                    ]
                });
            }
        } else {
            publishHouse = {
              list: [
                  {
                      owner: curHoster.name,
                      houses: [
                          {
                              id: 1,
                              name: 'house_01',
                              data: data
                          }
                      ]
                  }
              ]
            };
        }

        this.storageService.set(this.tableName,JSON.stringify(publishHouse));
        return of({status: 'success'});
    }

    getHouse(url: string, id: string): Observable<any> {
        let curHoster = this.pageRegisterLoginService.curloginedUser;
        let publishHouse = JSON.parse(this.storageService.get(this.tableName));
        if(publishHouse) {
            let userHouse = publishHouse.list.find(house => {return house.owner === curHoster.name;});
            if(userHouse) {
                let house = userHouse.houses.find(item => {return item.id === Number(id);});
                return of({owner: curHoster.name, house: house});
            } else {
                return of({owner: curHoster.name, house: null});
            }
        } else {
            return of({owner: curHoster.name, house: null});
        }
    }

    postUserData(url: string, data: any): Observable<any> {
        let curHoster = this.pageRegisterLoginService.curloginedUser;
        let tmpUserDatas = this.storageService.get(this.tableName2);
        let tmpUsersss = [];
        if(tmpUserDatas) {
            tmpUsersss = JSON.parse(tmpUserDatas);
            let tempIndex = tmpUsersss.findIndex(item => {return item.user === curHoster.name;});
            if(tempIndex !== -1) {
                tmpUsersss.splice(tempIndex,1,{user: curHoster.name, data: data});
            } else {
                tmpUsersss.push({user: curHoster.name, data: data});
            }
        } else {
            tmpUsersss.push({user: curHoster.name, data: data});
        }
        this.storageService.set(this.tableName2,JSON.stringify(tmpUsersss));
        return of({status: 'success'});
    }

    getUserData(url: string): Observable<any> {
        let curHoster = this.pageRegisterLoginService.curloginedUser;
        let tmpUserDatas = JSON.parse(this.storageService.get(this.tableName2));
        if(tmpUserDatas) {
            let tempUser = tmpUserDatas.find(item => {return item.item === curHoster.name;});
            if(tempUser) {
                return of(tempUser);
            } else {
                return of({user: curHoster.name, data: this.defaultUserData});
            }
        } else {
            return of({user: curHoster.name, data: this.defaultUserData});
        }
    }

}
