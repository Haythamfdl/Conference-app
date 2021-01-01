import { NgModule } from '@angular/core';
import {ListConferenceComponent} from "./component/list-conference/list-conference.component";
import {RouterModule, Routes} from "@angular/router";
import {FormConferenceComponent} from "./component/form-conference/form-conference.component";
import {ModifConferenceComponent} from "./component/modif-conference/modif-conference.component";
import {LoginComponent} from "./component/login/login.component";


const routes: Routes = [
  { path: 'Lconferences', component: ListConferenceComponent },
  { path: 'Aconferences', component: FormConferenceComponent },
  { path: 'Mconferences', component: ModifConferenceComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
