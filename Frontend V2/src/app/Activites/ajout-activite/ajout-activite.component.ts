import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExerciceServiceService } from 'src/app/Exercices/Services/exercice-service.service';
import { Activite } from 'src/app/Models/Activite';
import { Exercice } from 'src/app/Models/Exercice';
import { ActiviteServiceService } from '../Services/activite-service.service';

@Component({
  selector: 'app-ajout-activite',
  templateUrl: './ajout-activite.component.html',
  styleUrls: ['./ajout-activite.component.scss']
})
export class AjoutActiviteComponent implements OnInit {
listeExo: any;
activite = new Activite();
idExo: any;
exercice: any;

  constructor(
    private service: ActiviteServiceService,
    private serviceExercice: ExerciceServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.serviceExercice.listeExercice().subscribe((data: any)=>{
      this.listeExo = data;
      console.log(this.listeExo);
    })
  }

  AjoutActivite(form:NgForm) {
    this.idExo = form.value['exercice'];
    this.serviceExercice.detailExercice(this.idExo).subscribe((data:any)=>{
      this.exercice =  data;
      this.activite.dateDebut = form.value['dateDebut'];
      this.activite.dateFin = form.value['dateFin'];
      this.activite.etat = form.value['date_etat'];
      this.activite.libelle = form.value['libelle'];
      this.activite.type = form.value['type'];
      this.activite.etat = 'active';
      this.activite.exercice = this.exercice;
      this.service.Ajout(this.activite).subscribe((data: any)=> {
        this.router.navigate(['ajout-activite-suite', data.id_activite]);
      })
    })
  }
}
