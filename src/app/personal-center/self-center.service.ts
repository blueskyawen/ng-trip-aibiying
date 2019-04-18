/**
 * Created by root on 4/17/19.
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageService } from '../core/storage.service';
import { DbStorageService} from '../core/db-storage.service';
import { LocalStorageAuth, IndexDBAuth, AuthData} from '../core/storage-auth';
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

    private localAuth: LocalStorageAuth;
    private indexDbAuth: IndexDBAuth;
    authType: string = 'localStorage';
    tableName: string = 'published-houses';
    publishSub$ = new Subject<string>();

    constructor(private http: HttpClient,
                private storageService: StorageService,
                private dbStorageService: DbStorageService,
                public pageRegisterLoginService: PageRegisterLoginService) {
        this.localAuth = new LocalStorageAuth(this.storageService);
        this.indexDbAuth = new IndexDBAuth(this.dbStorageService);
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

    publishHouse(url: string, data: any): Observable<any> {
        let curHoster = this.pageRegisterLoginService.curloginedUser;
        let publishData: any = {
          owner: curHoster.name,
          name: `${curHoster.name}_house_${Math.ceil(Math.random() * 1000)}`,
          house: data
        };
        if(this.authType === 'localStorage') {
            this.localAuth.register(this.tableName, url, publishData);
            return of({status: 'success'});
        }

        if(this.authType === 'indexDB') {
            this.indexDbAuth.register(this.tableName, url, publishData,
                () => {this.procPublishSuccess();}, () => {this.procPublishFail();});
            return of({});
        }
    }

    procPublishSuccess() {
        this.publishSub$.next('success');
    }

    procPublishFail() {
        this.publishSub$.next('fail');
    }
}
