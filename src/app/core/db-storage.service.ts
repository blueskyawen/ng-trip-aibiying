import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbStorageService {
  dbName: string = 'db_aibiying';
  dbObject: any;
  db: any;
  constructor() { }

  getDbObject(name: string, func: Function) {
    let request = window.indexedDB.open(this.dbName, 1);
    request.onerror = (event) => {
      console.log('数据库打开报错');
    };
    request.onsuccess = (event) => {
      this.db = request.result;
      console.log('数据库打开成功');
      if (!this.db.objectStoreNames.contains(name)) {
        this.dbObject = this.db.createObjectStore(name, { autoIncrement: true });
        this.dbObject.createIndex('name', 'name', { unique: false });
      }
      func();
    };
    request.onupgradeneeded = (event) => {
      this.db = request.result;
      console.log('onupgradeneeded');
      if (!this.db.objectStoreNames.contains(name)) {
        this.dbObject = this.db.createObjectStore(name, { autoIncrement: true });
        this.dbObject.createIndex('name', 'name', { unique: false });
      }
    };
  }

  add(tableName: string, data: any) {
    var addItem = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var request = this.db.transaction(tableNames, 'readwrite')
          .objectStore(tableName)
          .add(data);
    };

    this.getDbObject(tableName, addItem);

  }

  read(tableName: string, key: string) {
    var getItem = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var transaction = this.db.transaction(tableNames);
      var objectStore = transaction.objectStore(tableName);
      var index = objectStore.index('name');
      var request = index.get(key);

      request.onerror = (event) => {
        console.log('事务失败');
      };
      request.onsuccess = ( event) => {
        if (request.result) {
          console.log(request.result);
        } else {
          console.log('未获得数据记录');
        }
      };
    };
    this.getDbObject(tableName, getItem);
    console.log('未获得数据记录333');
  }

  readAll(tableName: string, key: string) {
   // this.getDbObject(tableName);
    var objectStore = this.db.transaction(tableName).objectStore(tableName);

    objectStore.openCursor().onsuccess = function (event) {
      var cursor = event.target.result;

      if (cursor) {
        console.log(cursor);
        cursor.continue();
      } else {
        console.log('没有更多数据了！');
      }
    };
  }

  update(tableName: string, key: string, data: any) {
    let tableNames = [];
    tableNames.push(tableName);
   // this.getDbObject(tableName);
    var request = this.db.transaction(tableNames, 'readwrite')
        .objectStore(tableName)
        .put(data);

    request.onsuccess = function (event) {
      console.log('数据更新成功');
    };

    request.onerror = function (event) {
      console.log('数据更新失败');
    };
  }

  remove(tableName: string, key: string) {
    let tableNames = [];
    tableNames.push(tableName);
    //this.getDbObject(tableName);
    var request = this.db.transaction(tableNames, 'readwrite')
        .objectStore(tableName)
        .delete(key);

    request.onsuccess = function (event) {
      console.log('数据删除成功');
    };
  }
}

