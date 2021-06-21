import { AfterContentInit, Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpService } from '../service/http-service.service';
import { faCog, faTimesCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterContentInit {

  //icon var
  faCog = faCog; faTimesCircle = faTimesCircle; faEdit = faEdit;

  //ngIf var
  secretKeyEdit;
  configCard;
  userEdit;

  //device data
  actualDevice;

  fkGeolocation: Number;
  fkRecordsByMinute: Number;
  fkUser: Number;
  id: Number;
  secretKey: String;

  //record data
  lastRecord;
  lastPm25: number;
  lastPm10: number;
  recordingTime: Date;
  time;

  //user data
  nome;
  cognome;
  idUser;

  //avarage 24h data
  avgPm10: number;
  avgPm25: number;

  constructor(private dataService: DataService, private httpService: HttpService) { 

    this.secretKeyEdit = false;
    this.configCard = false;
    this.userEdit = false;
    
  }
  
  ngAfterContentInit(): void {
    this.dataService.data.subscribe(device => this.actualDevice = device)
    this.fkGeolocation = this.actualDevice[0].fkGeolocation;
    this.fkRecordsByMinute = this.actualDevice[0].fkRecordsByMinute;
    this.fkUser = this.actualDevice[0].fkUser;
    this.id = this.actualDevice[0].id;
    this.secretKey = this.actualDevice[0].secretKey;
    
    setTimeout(() => {      
      this.getLastRecord();
      this.getAvg();
      this.getUser()
    }, 2000);
  }

  async getUser() {
    let user;
    let promiseUser = new Promise((resolve, rej) => {
      this.httpService.user(this.fkUser).subscribe(record => {
        resolve(record);
      });
    })
    user = await promiseUser;

    this.idUser = user[0].id;
    this.nome = user[0].name;
    this.cognome = user[0].surname;
  }


  async getLastRecord() {
    let promiseLastRecord = new Promise((resolve, rej) => {
      this.httpService.lastRecord(this.id).subscribe(record => {
        resolve(record);
      });
    })
    this.lastRecord = await promiseLastRecord;
    console.log(this.lastRecord)

    this.lastPm10 = this.lastRecord[0].pm10;
    this.lastPm25 = this.lastRecord[0].pm25;
    this.recordingTime = new Date(this.lastRecord[0].recordingtime);
    this.time = `${this.recordingTime.getHours()} : ${this.recordingTime.getMinutes()} : ${this.recordingTime.getSeconds()}`;
  }

  async getAvg() {
    let avg10;
    let avg25;

    let promiseAvg10 = new Promise((resolve, rej) => {
      this.httpService.avgPm10(this.id).subscribe(record => {
        resolve(record);
      });
    })

    let promiseAvg25 = new Promise((resolve, rej) => {
      this.httpService.avgPm25(this.id).subscribe(record => {
        resolve(record);
      });
    })
    avg10 = await promiseAvg10;
    avg25 = await promiseAvg25;
    this.avgPm10 = avg10.Pm10Avarage;
    this.avgPm25 = avg25.Pm25Avarage;
  }

  secretKeyEditClick(){
    this.secretKeyEdit = !this.secretKeyEdit;
  }

  newSecretKeyClick(){
    this.httpService.newSecretKey(this.id, this.secretKey).subscribe(record => console.log(record));
  }

  configCardClick(){
    this.configCard = !this.configCard;
  }

  userEditClick(){
    this.userEdit = !this.userEdit;
  }

  newUserClick(){
    this.httpService.newUser(this.nome, this.cognome).subscribe(record => console.log(record));
  }

}
