import { NgModule } from '@angular/core';
import {ListConferenceComponent} from "./component/list-conference/list-conference.component";
import {RouterModule, Routes} from "@angular/router";
import {FormConferenceComponent} from "./component/form-conference/form-conference.component";
import {ModifConferenceComponent} from "./component/modif-conference/modif-conference.component";
import {LoginComponent} from "./component/login/login.component";
import {ListMesconfComponent} from "./component/list-mesconf/list-mesconf.component";
import {HomeComponent} from "./component/home/home.component";
import {RegisterComponent} from "./component/register/register.component";
import {ModifUserComponent} from "./component/modif-user/modif-user.component";
import {InvitationComponent} from "./component/invitation/invitation.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lconferences', component: ListConferenceComponent },
  { path: 'aconferences', component: FormConferenceComponent },
  { path: 'mconferences', component: ModifConferenceComponent },
  { path: 'myconferences', component: ListMesconfComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mutilisateur', component: ModifUserComponent },
  { path: 'invitation', component: InvitationComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
