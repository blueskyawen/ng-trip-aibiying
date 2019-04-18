import { StorageService } from './storage.service';
import { DbStorageService} from './db-storage.service';
import { Observable, of, Subject } from 'rxjs';

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

    register(table: string, url: string, data: AuthData) {
        let tmpUsers = [];
        if (this.storageService.get(table)) {
            tmpUsers = JSON.parse(this.storageService.get(table));
        }
        tmpUsers.push(data);
        this.storageService.set(table,JSON.stringify(tmpUsers));
    }

    loginOn(table: string, url: string, data : AuthData): boolean {
        if(this.storageService.get(table)) {
            let users = JSON.parse(this.storageService.get(table));
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

    loginOff(table: string, name: string) : boolean {
        if(this.storageService.get(table)) {
            let users = JSON.parse(this.storageService.get(table));
            let loginUser = users.find((item : any) => {
                return item.name === name;
            });
            if(loginUser) {
                this.storageService.set(table,JSON.stringify(users));
            }
        }
        return true;
    }

    getUser(table: string, name: string): any {
        if(this.storageService.get(table)) {
            let users = JSON.parse(this.storageService.get(table));
            let loginUser = users.find((item : any) => {
                return item.name === name;
            });
            if(loginUser) {
                return loginUser;
            }
        }
        return null;
    }

    getUserList(table: string): any[] {
        if(this.storageService.get(table)) {
            return JSON.parse(this.storageService.get(table));
        }
        return [];
    }

    modUser(table: string, name: string, data: any) : boolean {
        if(this.storageService.get(table)) {
            let users = JSON.parse(this.storageService.get(table));
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

    deleteUser(table: string, name: string) : boolean {
        if(this.storageService.get(table)) {
            let users = JSON.parse(this.storageService.get(table));
            users = users.filter((item : any) => {
                return item.name !== name;
            });
            this.storageService.set(table,JSON.stringify(users));
        }
        return true;
    }

    clear(table: string) : boolean {
        if(this.storageService.get(table)) {
            this.storageService.set(table,JSON.stringify([]));
        }
        return true;
    }
}

export class IndexDBAuth {
    constructor(public dbStorageService: DbStorageService) {}

    register(table: string, url: string, data: AuthData, succFunc: Function, failFunc: Function) {
        this.dbStorageService.add(table, data, succFunc, failFunc);
    }

    loginOn(table: string, url: string, data : AuthData, succFunc: Function, failFunc: Function) {
        this.dbStorageService.read(table, data.name, succFunc, failFunc);
    }

    loginOff(table: string, name: string): Observable<boolean> {
        return of(true);
    }

    getUser(table: string, url: string, name: string, succFunc: Function, failFunc: Function) {
        this.dbStorageService.read(table, name, succFunc, failFunc);
    }

    getAllUser(table: string, url: string, succFunc: Function, failFunc: Function) {
        this.dbStorageService.readAll(table, succFunc, failFunc);
    }

    modUser(table: string, url: string, name: string, data: any, succFunc: Function, failFunc: Function) {
        this.dbStorageService.update(table, name, data, succFunc, failFunc);
    }

    deleteUser(table: string, url: string, name: string, succFunc: Function, failFunc: Function) {
        this.dbStorageService.remove(table, name, succFunc, failFunc);
    }

    clear(table: string, url: string, succFunc: Function, failFunc: Function) {
        this.dbStorageService.clear(table, succFunc, failFunc);
    }
}
