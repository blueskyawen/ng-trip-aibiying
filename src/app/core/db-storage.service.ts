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

  add(tableName: string, data: any, succFunc: Function, failFunc: Function) {
    var addItem = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var request = this.db.transaction(tableNames, 'readwrite')
          .objectStore(tableName)
          .add(data);
      request.onerror = (event) => {
        console.log('add事务失败');
        failFunc();
      };
      request.onsuccess = (event) => {
        console.log('add事务成功');
        succFunc();
      };
    };

    this.getDbObject(tableName, addItem);
  }

  read(tableName: string, name: string, succFunc: Function, failFunc: Function) {
    var getItem = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var transaction = this.db.transaction(tableNames);
      var objectStore = transaction.objectStore(tableName);
      var index = objectStore.index('name');
      var request = index.get(name);

      request.onerror = (event) => {
        console.log('read事务失败');
        failFunc(null);
      };
      request.onsuccess = (event) => {
        console.log('read事务成功');
        if (request.result) {
          console.log(request.result);
          succFunc(request.result);
        } else {
          console.log('未获得数据记录');
          failFunc(null);
        }
      };
    };
    this.getDbObject(tableName, getItem);
  }

  readAll(tableName: string, succFunc: Function, failFunc: Function) {
    var getItemList = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var transaction = this.db.transaction(tableNames);
      var objectStore = transaction.objectStore(tableName);
      var request = objectStore.getAll();

      request.onerror = (event) => {
        console.log('readAll事务失败');
        failFunc();
      };
      request.onsuccess = (event) => {
        console.log('readAll事务成功');
        if (request.result) {
          succFunc(request.result);
        } else {
          console.log('未获得数据记录');
          succFunc(null);
        }
      };
    };

    this.getDbObject(tableName, getItemList);
  }

  update(tableName: string, name: string, data: any, succFunc: Function, failFunc: Function) {
    var putItem = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var transaction = this.db.transaction(tableNames);
      var objectStore = transaction.objectStore(tableName);
      var request = objectStore.put(data, name);

      request.onerror = (event) => {
        console.log('update事务失败');
        failFunc(null);
      };
      request.onsuccess = (event) => {
        console.log('update事务成功');
        succFunc(data);
      };
    };

    this.getDbObject(tableName, putItem);
  }

  remove(tableName: string, name: string, succFunc: Function, failFunc: Function) {
    var deleteItem = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var transaction = this.db.transaction(tableNames);
      var objectStore = transaction.objectStore(tableName);
      var request = objectStore.delete(name);

      request.onerror = (event) => {
        console.log('remove事务失败');
        failFunc();
      };
      request.onsuccess = (event) => {
        console.log('remove事务成功');
        succFunc();
      };
    };

    this.getDbObject(tableName, deleteItem);
  }

  clear(tableName: string,succFunc: Function, failFunc: Function) {
    var clearItems = () => {
      var tableNames = [];
      tableNames.push(tableName);
      var transaction = this.db.transaction(tableNames);
      var objectStore = transaction.objectStore(tableName);
      var request = objectStore.clear();

      request.onerror = (event) => {
        console.log('clear事务失败');
        failFunc();
      };
      request.onsuccess = (event) => {
        console.log('clear事务成功');
        succFunc();
      };
    };

    this.getDbObject(tableName, clearItems);
  }
}

