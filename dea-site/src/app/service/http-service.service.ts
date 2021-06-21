import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private myhttp: HttpClient) {
  }

  headers = new HttpHeaders().set('authorization', '318e4f91b76cdcd9e64dc647cea6e322ee675207581d927f71b8b7b496884170d8b3e964614e09b266cb8737605d389ec4d5037f4384791a06e5d1eed2585db1');


  login(secretKey): Observable<[]> {
    console.log(this.headers)
    return this.myhttp.get<[]>(`http://dea-ws:3200/device/by_secret_key/${secretKey}`, { headers: this.headers })
      .pipe(map(response => response));
  }

  lastRecord(id): Observable<[]> {
    return this.myhttp.get<[]>(`http://dea-ws:3200/last_record/${id}`, { headers: this.headers })
      .pipe(map(response => response));
  }

  avgPm10(id): Observable<[]> {
    return this.myhttp.get<[]>(`http://dea-ws:3200/avg24h/10/${id}`, { headers: this.headers })
      .pipe(map(response => response));
  }

  avgPm25(id): Observable<[]> {
    return this.myhttp.get<[]>(`http://dea-ws:3200/avg24h/25/${id}`, { headers: this.headers })
      .pipe(map(response => response));
  }

  user(id): Observable<[]> {
    return this.myhttp.get<[]>(`http://dea-ws:3200/user/${id}`, { headers: this.headers })
      .pipe(map(response => response));
  }

  newUser(name, surname): Observable<[]> {
    let body = {name: name, surname: surname}
    return this.myhttp.post<[]>(`http://dea-ws:3200/user/new_user`, body, {headers: this.headers})
      .pipe(map(response => response));
  }

  newSecretKey(id, passedSecretKey): Observable<[]> {
    let body = {secretKey: passedSecretKey}
    return this.myhttp.put<[]>(`http://dea-ws:3200/device/new_secret_key/${id}`, body, {headers: this.headers})
  }
}
