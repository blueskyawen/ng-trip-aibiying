/**
 * Created by root on 4/17/19.
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


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
        }
    };
    constructor(private http: HttpClient) {}

    getHouseTypes() {
        return this.http.get('assets/house-type-list.json').pipe(
            map(res => res['houseTypes'] || {})
        );
    }
}
