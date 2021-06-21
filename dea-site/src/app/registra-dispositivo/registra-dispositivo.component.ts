import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';
import { HttpService } from "../service/http-service.service";

@Component({
  selector: 'app-registra-dispositivo',
  templateUrl: './registra-dispositivo.component.html',
  styleUrls: ['./registra-dispositivo.component.css']
})
export class RegistraDispositivoComponent implements OnInit {

  secretKey: String;

  constructor(private httpService: HttpService, private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.secretKey = "";
  }

  ngOnInit(): void {

  }

  accediClick(secretKey) {
    this.httpService.login(secretKey).subscribe(loginData => {
      if (loginData.length > 0) {
        this.dataService.SetData(loginData)
        this.router.navigate(['Dashboard'])
      } else
        console.error("impossibile trovare il dispositivo")
    }
    );
  }

}
