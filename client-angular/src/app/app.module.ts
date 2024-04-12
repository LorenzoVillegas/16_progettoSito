import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AncientComponent } from './ancient/ancient.component';
import { ModernComponent } from './modern/modern.component';
import { NFTComponent } from './nft/nft.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AncientComponent,
    ModernComponent,
    NFTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
