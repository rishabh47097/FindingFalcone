import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StartupComponent } from './startup/startup.component';
import { MainComponent } from './main/main.component';
import { EndComponent } from './end/end.component';
import { HeaderComponent } from './header/header.component';
import { AppDataService } from './app-data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoute: Routes = [
  {path : '', component : StartupComponent},
  {path : 'main', component : MainComponent},
  {path : 'end', component : EndComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StartupComponent,
    MainComponent,
    EndComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    NgbModule
  ],
  providers: [
    AppDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
