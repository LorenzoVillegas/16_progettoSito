import { Component, OnInit } from '@angular/core';
import { ServiceAPIService } from '../service-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ancient',
  templateUrl: './ancient.component.html',
  styleUrls: ['./ancient.component.css']
})
export class AncientComponent implements OnInit{
  results: any;
  
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient, private ServiceAPI:ServiceAPIService ) {}
  
  ngOnInit(): void {
    this.ServiceAPI.getAPIancient()
      .subscribe ( data => {this.results = data.Ancient})
  }

}
  
