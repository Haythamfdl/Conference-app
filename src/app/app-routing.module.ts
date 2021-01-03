import { NgModule } from '@angular/core';
import {ListConferenceComponent} from "./component/list-conference/list-conference.component";
import {RouterModule, Routes} from "@angular/router";
import {FormConferenceComponent} from "./component/form-conference/form-conference.component";
import {ModifConferenceComponent} from "./component/modif-conference/modif-conference.component";
import {LoginComponent} from "./component/login/login.component";
import {ListMesconfComponent} from "./component/list-mesconf/list-mesconf.component";
import {HomeComponent} from "./component/home/home.component";
import {RegisterComponent} from "./component/register/register.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Lconferences', component: ListConferenceComponent },
  { path: 'Aconferences', component: FormConferenceComponent },
  { path: 'Mconferences', component: ModifConferenceComponent },
  { path: 'Myconferences', component: ListMesconfComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
