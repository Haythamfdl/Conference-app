import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListConferenceComponent } from './component/list-conference/list-conference.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { FormConferenceComponent } from './component/form-conference/form-conference.component';
import { ModifConferenceComponent } from './component/modif-conference/modif-conference.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListMesconfComponent } from './component/list-mesconf/list-mesconf.component';

@NgModule({
  declarations: [
    AppComponent,
    ListConferenceComponent,
    FormConferenceComponent,
    ModifConferenceComponent,
    LoginComponent,
    NavbarComponent,
    ListMesconfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
