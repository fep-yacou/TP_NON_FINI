import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponsableServiceService } from '../Services/responsable-service.service';

@Component({
  selector: 'app-ajout-responsable',
  templateUrl: './ajout-responsable.component.html',
  styleUrls: ['./ajout-responsable.component.scss']
})
export class AjoutResponsableComponent implements OnInit {
  responsable: any;
  respons: any;
  erreur = '';

  constructor(
    private service : ResponsableServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  ajoutResponsables(form: NgForm){
    this.respons = {
                    "nom": form.value['nom'], 
                    "prenom": form.value['prenom'],
                    "telephone": form.value['telephone'],
                    "domaine": form.value['domaine'],
                    "email": form.value['email'],
                    "etat": "active",
                    "type": form.value['type'],
                  };
      this.service.ajoutResponsale(this.respons).subscribe((data:any)=>{
      this.responsable = data;
      this.router.navigate(['liste-responsable'])
      });
  }
}
