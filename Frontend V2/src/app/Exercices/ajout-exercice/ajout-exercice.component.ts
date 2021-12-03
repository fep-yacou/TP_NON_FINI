import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Exercice } from 'src/app/Models/Exercice';
import { ExerciceServiceService } from '../Services/exercice-service.service';

@Component({
  selector: 'app-ajout-exercice',
  templateUrl: './ajout-exercice.component.html',
  styleUrls: ['./ajout-exercice.component.scss']
})
export class AjoutExerciceComponent implements OnInit {
  exercice : any;
  exo = new Exercice();
  erreur = '';
  erreurIsExo='';
  isExo: any;
  constructor(
    private service : ExerciceServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ajoutExercice(form: NgForm){
    if(form.valid){
     
      if(moment(form.value['date_debut']).isBefore(form.value['date_fin'])){
        this.exo.annee = form.value['annee'];
        this.exo.date_debut = form.value['date_debut'];
        this.exo.date_fin = form.value['date_fin'];
        this.exo.statut = 'encours';
        this.exo.etat = 'active';
        this.service.RechercheExercice(this.exo.annee).subscribe((data: any)=>{
          this.isExo = data;
          if(this.exo){
            this.erreurIsExo = "Cet exercice existe déjà !"
          }else{
             this.service.ajoutExercice(this.exo).subscribe((data: any)=>{
             this.exercice = data;
             this.router.navigate(['liste-exercice']);
             });
          }
          
        })
        
    }else{
      console.log("false");
      this.erreur = 'La date de debut doit être inferieure à la date de fin';
    }
    }   
  }

}
