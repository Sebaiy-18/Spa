import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartFramWorkComponent } from './start-fram-work/start-fram-work.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', component:StartFramWorkComponent , title:'home'},
  {path:'about', component:AboutComponent , title:'about'},
  {path:'portfolio', component:PortfolioComponent , title:'portfolio'},
  {path:'contact',component:ContactComponent , title:'contact'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
