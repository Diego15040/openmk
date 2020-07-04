import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { combineLatest, from } from 'rxjs';
import { SubnavComponent } from './components/subnav/subnav.component';
import { componentFactoryName } from '@angular/compiler';
import { DetailsComponent } from './components/details/details.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ListComponent } from './components/list/list.component';
import { Page404Component } from './components/page404/page404.component';
import { CreateComponent } from './components/create/create.component';
import { Agent } from 'http';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'subnav', component: SubnavComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: '**', component: Page404Component},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
