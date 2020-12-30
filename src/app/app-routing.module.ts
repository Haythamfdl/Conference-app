import { NgModule } from '@angular/core';
import {ListConferenceComponent} from "./component/list-conference/list-conference.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: 'Lconferences', component: ListConferenceComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
