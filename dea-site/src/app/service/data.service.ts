import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private _data: BehaviorSubject<any> = new BehaviorSubject('');

  public get data(): Observable<any>{
    return this._data.asObservable();
  }

  SetData(dataToPass){
    this._data.next(dataToPass);
  }
}
