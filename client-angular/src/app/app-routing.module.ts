import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AncientComponent } from './ancient/ancient.component';
import { ModernComponent } from './modern/modern.component';
import { NFTComponent } from './nft/nft.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'ancient', component: AncientComponent },
  { path: 'modern', component: ModernComponent },
  { path: 'nft', component: NFTComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
