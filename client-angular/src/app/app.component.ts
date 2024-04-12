import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    // Make the HTTP request: 
    this.http.get('https://3000-lorenzovill-16progettos-kdu3041oeey.ws-eu110.gitpod.io/api').subscribe(data => {this.results = data['results']; });
  }
}
