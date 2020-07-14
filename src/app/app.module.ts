import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StartupComponent } from './startup/startup.component';
import { MainComponent } from './main/main.component';
import { EndComponent } from './end/end.component';
import { HeaderComponent } from './header/header.component';
import { AppDataService } from './app-data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ],
  providers: [
    AppDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
