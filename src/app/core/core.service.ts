import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  getHouseId() {
    return Math.ceil(Math.random() * 10) % 2;
  }

  getHouseIndex(index: any) {
    return (Math.ceil(Math.random() * 10) + Number(index)) % 2;
  }
}
