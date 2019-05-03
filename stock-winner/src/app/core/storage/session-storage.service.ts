import { Injectable } from '@angular/core';
import { IStorage } from './storage.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements IStorage {

  constructor() { }

  getData(key: string): string {
    return window.sessionStorage.getItem(key);
  }
  
  putData(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  }    
}
