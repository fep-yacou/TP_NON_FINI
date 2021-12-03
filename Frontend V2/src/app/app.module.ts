import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { AjoutAdminComponent } from './Administrateurs/ajout-admin/ajout-admin.component';
import { ModifierAdminComponent } from './Administrateurs/modifier-admin/modifier-admin.component';
import { ListeAdminComponent } from './Administrateurs/liste-admin/liste-admin.component';
import { AjoutExerciceComponent } from './Exercices/ajout-exercice/ajout-exercice.component';
import { ModifierExerciceComponent } from './Exercices/modifier-exercice/modifier-exercice.component';
import { ListeExerciceComponent } from './Exercices/liste-exercice/liste-exercice.component';
import { DetailExerciceComponent } from './Exercices/detail-exercice/detail-exercice.component';
import { DetailAdminComponent } from './Administrateurs/detail-admin/detail-admin.component';
import { AjoutParticipantComponent } from './Participants/ajout-participant/ajout-participant.component';
import { ModifierParticipantComponent } from './Participants/modifier-participant/modifier-participant.component';
import { ListeParticipantComponent } from './Participants/liste-participant/liste-participant.component';
import { DetailParticipantComponent } from './Participants/detail-participant/detail-participant.component';
import { AjoutResponsableComponent } from './Responsables/ajout-responsable/ajout-responsable.component';
import { ModifierResponsableComponent } from './Responsables/modifier-responsable/modifier-responsable.component';
import { ListeResponsableComponent } from './Responsables/liste-responsable/liste-responsable.component';
import { DetailResponsableComponent } from './Responsables/detail-responsable/detail-responsable.component';
import { AjoutActiviteComponent } from './Activites/ajout-activite/ajout-activite.component';
import { ModifierActiviteComponent } from './Activites/modifier-activite/modifier-activite.component';
import { ListeActiviteComponent } from './Activites/liste-activite/liste-activite.component';
import { DetailActiviteComponent } from './Activites/detail-activite/detail-activite.component';
import { LoginComponent } from './Login/login/login.component';
import { AjoutRoleComponent } from './Role/ajout-role/ajout-role.component';
import { DetailRoleComponent } from './Role/detail-role/detail-role.component';
import { ModifierRoleComponent } from './Role/modifier-role/modifier-role.component';
import { ListeRoleComponent } from './Role/liste-role/liste-role.component';
import { AjoutActiviteSuiteComponent } from './Activites/ajout-activite-suite/ajout-activite-suite.component';
import { AjoutResponsableActiviteComponent } from './Activites/ajout-responsable-activite/ajout-responsable-activite.component';
import { AjoutParticipantFichierComponent } from './Participants/ajout-participant-fichier/ajout-participant-fichier.component';
import { ProfilUserComponent } from './UserProfil/profil-user/profil-user.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SideMenuComponent,
    HeaderComponent,
    AjoutAdminComponent,
    ModifierAdminComponent,
    ListeAdminComponent,
    AjoutExerciceComponent,
    ModifierExerciceComponent,
    ListeExerciceComponent,
    DetailExerciceComponent,
    DetailAdminComponent,
    AjoutParticipantComponent,
    ModifierParticipantComponent,
    ListeParticipantComponent,
    DetailParticipantComponent,
    AjoutResponsableComponent,
    ModifierResponsableComponent,
    ListeResponsableComponent,
    DetailResponsableComponent,
    AjoutActiviteComponent,
    ModifierActiviteComponent,
    ListeActiviteComponent,
    DetailActiviteComponent,
    LoginComponent,
    AjoutRoleComponent,
    DetailRoleComponent,
    ModifierRoleComponent,
    ListeRoleComponent,
    AjoutActiviteSuiteComponent,
    AjoutResponsableActiviteComponent,
    AjoutParticipantFichierComponent,
    ProfilUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule
    
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
