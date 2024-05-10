import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceAPIService } from './service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client-angular';

  results: string[];
  
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {}

  //Per la versione in cui siamo ora non viene utilizzato ancora la ricezione dei dati
  ngOnInit(): void {

  }
}
