import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {

  constructor(private http: HttpClient) { }

  public getAPIancient(){
    // Make the HTTP request: 
    return this.http.get<any>('https://3000-lorenzovill-16progettos-svf8rgcxvar.ws-eu114.gitpod.io/api/ancient');
  }

  public getAPINFT(){
    // Make the HTTP request: 
    return this.http.get<any>('https://3000-lorenzovill-16progettos-svf8rgcxvar.ws-eu114.gitpod.io/api/NFT');
  }

  public getAPImodern(){
    // Make the HTTP request: 
    return this.http.get<any>('https://3000-lorenzovill-16progettos-svf8rgcxvar.ws-eu114.gitpod.io/api/modern');
  }
}
