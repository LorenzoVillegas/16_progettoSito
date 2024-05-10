import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { ServiceAPIService } from '../service-api.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NFTComponent implements OnInit{
  results: any;
  
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient, private ServiceAPI:ServiceAPIService ) {}
  
  ngOnInit(): void {
    this.ServiceAPI.getAPINFT()
      .subscribe ( data => {this.results = data.NFT})
  }


}
