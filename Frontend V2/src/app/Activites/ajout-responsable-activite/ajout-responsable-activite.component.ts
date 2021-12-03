import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableServiceService } from 'src/app/Responsables/Services/responsable-service.service';
import { ActiviteServiceService } from '../Services/activite-service.service';

@Component({
  selector: 'app-ajout-responsable-activite',
  templateUrl: './ajout-responsable-activite.component.html',
  styleUrls: ['./ajout-responsable-activite.component.scss']
})
export class AjoutResponsableActiviteComponent implements OnInit {
  id: any;
  activite: any;
  respons: any;
  responsable: any;
  logActivite: any;
  responsableParActivite: any;
  errorEmailResp: any;

  constructor(
    private service: ActiviteServiceService,
    private serviceResponsable: ResponsableServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detail(this.id).subscribe((data: any)=>{
      this.activite = data;
    });

    this.service.ResponsableParActivite(this.id).subscribe((data:any)=>{
      this.responsableParActivite = data;
      console.log(this.responsableParActivite);
    })
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
  for(let i=0; i<this.responsableParActivite.length; i++){
    if(this.responsableParActivite[i].activite.email == form.value['email']){
      this.errorEmailResp = "Ce Responsable existe déjà !"
    }
  }
      // this.serviceResponsable.ajoutResponsale(this.respons).subscribe((data:any)=>{
      // this.responsable = data;
      //   this.logActivite = {"responsable": this.responsable, "activite": this.activite}
      //   this.service.AjoutLog(this.logActivite).subscribe((log: any)=>{
      //     this.router.navigate(['liste-activite'])
      //   })
      
      // });
  }

}
