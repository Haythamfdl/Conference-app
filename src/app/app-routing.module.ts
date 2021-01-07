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
import {InvitRecuComponent} from "./component/invit-recu/invit-recu.component";
import {InvitEnvComponent} from "./component/invit-env/invit-env.component";
import {InfoConfComponent} from "./component/info-conf/info-conf.component";
import {ListSessComponent} from "./component/list-sess/list-sess.component";
import {FormSessComponent} from "./component/form-sess/form-sess.component";
import {ModifSessComponent} from "./component/modif-sess/modif-sess.component";
import {ListTrackComponent} from "./component/list-track/list-track.component";
import {FormTrackComponent} from "./component/form-track/form-track.component";
import {ModifTrackComponent} from "./component/modif-track/modif-track.component";
import {FormPapierComponent} from "./component/form-papier/form-papier.component";
import {ListTopicComponent} from "./component/list-topic/list-topic.component";
import {FormTopicComponent} from "./component/form-topic/form-topic.component";
import {ModifTopicComponent} from "./component/modif-topic/modif-topic.component";
import {ChoixConfComponent} from "./component/choix-conf/choix-conf.component";
import {ListMespapierComponent} from "./component/list-mespapier/list-mespapier.component";
import {ListRecpapierComponent} from "./component/list-recpapier/list-recpapier.component";
import {ModifPapierComponent} from "./component/modif-papier/modif-papier.component";
import {AjoutPaptrackComponent} from "./component/ajout-paptrack/ajout-paptrack.component";
import {InfoPapierComponent} from "./component/info-papier/info-papier.component";
import {ListReviewComponent} from "./component/list-review/list-review.component";
import {ListMyreviewsComponent} from "./component/list-myreviews/list-myreviews.component";
import {ReviewPapierComponent} from "./component/review-papier/review-papier.component";
import {ModifReviewComponent} from "./component/modif-review/modif-review.component";
import {InfoReviewComponent} from "./component/info-review/info-review.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lconferences', component: ListConferenceComponent },
  { path: 'aconferences', component: FormConferenceComponent },
  { path: 'mconferences', component: ModifConferenceComponent },
  { path: 'myconferences', component: ListMesconfComponent },
  { path: 'conference', component: InfoConfComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mutilisateur', component: ModifUserComponent },
  { path: 'invitation', component: InvitationComponent },
  { path: 'rinvitation', component: InvitRecuComponent },
  { path: 'einvitation', component: InvitEnvComponent },
  { path: 'sessions', component: ListSessComponent },
  { path: 'asession', component: FormSessComponent },
  { path: 'msession', component: ModifSessComponent },
  { path: 'tracks', component: ListTrackComponent },
  { path: 'atrack', component: FormTrackComponent },
  { path: 'mtrack', component: ModifTrackComponent },
  { path: 'topics', component: ListTopicComponent },
  { path: 'atopic', component: FormTopicComponent },
  { path: 'mtopic', component: ModifTopicComponent },
  { path: 'cconference', component: ChoixConfComponent },
  { path: 'mypapier', component: ListMespapierComponent },
  { path: 'recpapier', component: ListRecpapierComponent },
  { path: 'apapier', component: FormPapierComponent },
  { path: 'mpapier', component: ModifPapierComponent },
  { path: 'apaptrack', component: AjoutPaptrackComponent },
  { path: 'papier', component: InfoPapierComponent },
  { path: 'reviews', component: ListReviewComponent },
  { path: 'myreviews', component: ListMyreviewsComponent },
  { path: 'areview', component: ReviewPapierComponent },
  { path: 'mreview', component: ModifReviewComponent },
  { path: 'review', component: InfoReviewComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
