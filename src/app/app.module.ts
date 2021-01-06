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
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { ModifUserComponent } from './component/modif-user/modif-user.component';
import { InvitationComponent } from './component/invitation/invitation.component';
import { InvitRecuComponent } from './component/invit-recu/invit-recu.component';
import { InvitEnvComponent } from './component/invit-env/invit-env.component';
import { InfoConfComponent } from './component/info-conf/info-conf.component';
import { ListSessComponent } from './component/list-sess/list-sess.component';
import { FormSessComponent } from './component/form-sess/form-sess.component';
import { ModifSessComponent } from './component/modif-sess/modif-sess.component';
import { ListTrackComponent } from './component/list-track/list-track.component';
import { FormTrackComponent } from './component/form-track/form-track.component';
import { ModifTrackComponent } from './component/modif-track/modif-track.component';
import { FormPapierComponent } from './component/form-papier/form-papier.component';
import { ListTopicComponent } from './component/list-topic/list-topic.component';
import { FormTopicComponent } from './component/form-topic/form-topic.component';
import { ModifTopicComponent } from './component/modif-topic/modif-topic.component';
import { ChoixConfComponent } from './component/choix-conf/choix-conf.component';
import { ListMespapierComponent } from './component/list-mespapier/list-mespapier.component';
import { ListRecpapierComponent } from './component/list-recpapier/list-recpapier.component';
import { ModifPapierComponent } from './component/modif-papier/modif-papier.component';
import { AjoutPaptrackComponent } from './component/ajout-paptrack/ajout-paptrack.component';

@NgModule({
  declarations: [
    AppComponent,
    ListConferenceComponent,
    FormConferenceComponent,
    ModifConferenceComponent,
    LoginComponent,
    NavbarComponent,
    ListMesconfComponent,
    HomeComponent,
    RegisterComponent,
    ModifUserComponent,
    InvitationComponent,
    InvitRecuComponent,
    InvitEnvComponent,
    InfoConfComponent,
    ListSessComponent,
    FormSessComponent,
    ModifSessComponent,
    ListTrackComponent,
    FormTrackComponent,
    ModifTrackComponent,
    FormPapierComponent,
    ListTopicComponent,
    FormTopicComponent,
    ModifTopicComponent,
    ChoixConfComponent,
    ListMespapierComponent,
    ListRecpapierComponent,
    ModifPapierComponent,
    AjoutPaptrackComponent
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
