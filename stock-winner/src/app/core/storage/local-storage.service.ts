import { Injectable } from '@angular/core';
import { IStorage } from './storage.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements IStorage {

  constructor() { }

  getData(key: string): string {
    return window.localStorage.getItem(key);
  }
  putData(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }  
}
