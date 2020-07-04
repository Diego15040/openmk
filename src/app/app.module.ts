import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';
import { HeroComponent } from './components/importar/hero.component';
import { Page404Component } from './components/page404/page404.component';
import { DataApiService } from './services/data-api.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import{material} from './material-module';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { VideoComponent } from './video/video.component';
import { AgentsComponent } from './components/forms/agents/agents.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AgentComponent } from './components/agent/agent/agent.component';
import { VariationsComponent } from './components/variations/variations/variations.component';
import { RulesEditComponent } from './components/rules-edit/rules-edit.component';
import { AgentEditComponent } from './components/agent-edit/agent-edit.component';
import { VariationsEditComponent } from './components/variations-edit/variations-edit.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubnavComponent,
    DetailsComponent,
    ListComponent,
    HeroComponent,
    Page404Component,
    SidenavComponent,
    CreateComponent,
    EditComponent,
    FooterComponent,
    VideoComponent,
    AgentsComponent,
    AgentComponent,
    VariationsComponent,
    RulesEditComponent,
    AgentEditComponent,
    VariationsEditComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    material,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],

  providers: [DataApiService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
