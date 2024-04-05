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

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-lorenzovill-16progettos-s37t22o0wzd.ws-eu110.gitpod.io/api').subscribe(data => {this.results = data['results']; });
  }
}
