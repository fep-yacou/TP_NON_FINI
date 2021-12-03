import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutActiviteSuiteComponent } from './Activites/ajout-activite-suite/ajout-activite-suite.component';
import { AjoutActiviteComponent } from './Activites/ajout-activite/ajout-activite.component';
import { AjoutResponsableActiviteComponent } from './Activites/ajout-responsable-activite/ajout-responsable-activite.component';
import { DetailActiviteComponent } from './Activites/detail-activite/detail-activite.component';
import { ListeActiviteComponent } from './Activites/liste-activite/liste-activite.component';
import { ModifierActiviteComponent } from './Activites/modifier-activite/modifier-activite.component';
import { AjoutAdminComponent } from './Administrateurs/ajout-admin/ajout-admin.component';
import { DetailAdminComponent } from './Administrateurs/detail-admin/detail-admin.component';
import { ListeAdminComponent } from './Administrateurs/liste-admin/liste-admin.component';
import { ModifierAdminComponent } from './Administrateurs/modifier-admin/modifier-admin.component';
import { AjoutExerciceComponent } from './Exercices/ajout-exercice/ajout-exercice.component';
import { DetailExerciceComponent } from './Exercices/detail-exercice/detail-exercice.component';
import { ListeExerciceComponent } from './Exercices/liste-exercice/liste-exercice.component';
import { ModifierExerciceComponent } from './Exercices/modifier-exercice/modifier-exercice.component';
import { LoginComponent } from './Login/login/login.component';
import { AjoutParticipantFichierComponent } from './Participants/ajout-participant-fichier/ajout-participant-fichier.component';
import { AjoutParticipantComponent } from './Participants/ajout-participant/ajout-participant.component';
import { DetailParticipantComponent } from './Participants/detail-participant/detail-participant.component';
import { ListeParticipantComponent } from './Participants/liste-participant/liste-participant.component';
import { ModifierParticipantComponent } from './Participants/modifier-participant/modifier-participant.component';
import { AjoutResponsableComponent } from './Responsables/ajout-responsable/ajout-responsable.component';
import { DetailResponsableComponent } from './Responsables/detail-responsable/detail-responsable.component';
import { ListeResponsableComponent } from './Responsables/liste-responsable/liste-responsable.component';
import { ModifierResponsableComponent } from './Responsables/modifier-responsable/modifier-responsable.component';
import { AjoutRoleComponent } from './Role/ajout-role/ajout-role.component';
import { DetailRoleComponent } from './Role/detail-role/detail-role.component';
import { ListeRoleComponent } from './Role/liste-role/liste-role.component';
import { ModifierRoleComponent } from './Role/modifier-role/modifier-role.component';
import { ProfilUserComponent } from './UserProfil/profil-user/profil-user.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },

  // Gestion Administrateurs
  { path: 'liste-admin', component: ListeAdminComponent },
  { path: 'ajout-admin', component: AjoutAdminComponent },
  { path: 'modifier-admin/:id', component: ModifierAdminComponent },
  { path: 'detail-admin/:id', component: DetailAdminComponent },

   // Gestion Activités
  { path: 'liste-activite', component: ListeActiviteComponent },
  { path: 'ajout-activite', component: AjoutActiviteComponent },
  { path: 'modifier-activite/:id', component: ModifierActiviteComponent },
  { path: 'detail-activite/:id', component: DetailActiviteComponent },
  { path: 'ajout-activite-suite/:id', component: AjoutActiviteSuiteComponent },
  { path: 'ajout-activite-responsable/:id', component: AjoutResponsableActiviteComponent },

    // Gestion Excercices
  { path: 'liste-exercice', component: ListeExerciceComponent },
  { path: 'ajout-exercice', component: AjoutExerciceComponent },
  { path: 'modifier-exercice/:id', component: ModifierExerciceComponent },
  { path: 'detail-exercice/:id', component: DetailExerciceComponent },

   // Gestion Participants
   { path: 'liste-participant', component: ListeParticipantComponent },
   { path: 'ajout-participant/:id', component: AjoutParticipantComponent },
   { path: 'modifier-participant/:id', component: ModifierParticipantComponent },
   { path: 'detail-participant/:id', component: DetailParticipantComponent },
   { path: 'ajout-participant-fichier/:id', component: AjoutParticipantFichierComponent },

  // Gestion Responsables
  { path: 'liste-responsable', component: ListeResponsableComponent },
  { path: 'ajout-responsable', component: AjoutResponsableComponent },
  { path: 'modifier-responsable/:id', component: ModifierResponsableComponent },
  { path: 'detail-responsable/:id', component: DetailResponsableComponent },

   // Gestion Rôle
   { path: 'liste-role', component: ListeRoleComponent },
   { path: 'ajout-role', component: AjoutRoleComponent },
   { path: 'modifier-role/:id', component: ModifierRoleComponent },
   { path: 'detail-role/:id', component: DetailRoleComponent },

    // Gestion UserProfil
    { path: 'profil-user', component: ProfilUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
