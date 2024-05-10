import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceAPIService } from '../service-api.service';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  styleUrls: ['./modern.component.css']
})
export class ModernComponent implements OnInit{
  results: any;
  
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient, private ServiceAPI:ServiceAPIService ) {}
  
  ngOnInit(): void {
    this.ServiceAPI.getAPImodern()
      .subscribe ( data => {this.results = data.Modern})
  }

}
