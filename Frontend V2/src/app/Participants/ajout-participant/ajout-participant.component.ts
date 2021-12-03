import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteServiceService } from 'src/app/Activites/Services/activite-service.service';
import { ParticipantServiceService } from '../Services/participant-service.service';

@Component({
  selector: 'app-ajout-participant',
  templateUrl: './ajout-participant.component.html',
  styleUrls: ['./ajout-participant.component.scss']
})
export class AjoutParticipantComponent implements OnInit {
  participant:any;
  id: any;
  activite: any;
  participation: any;

  constructor(
    private service: ParticipantServiceService,
    private serviceAct: ActiviteServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.serviceAct.detail(this.id).subscribe((data: any)=>{
      this.activite = data;
    });
  }

  onRegister(form: NgForm){
    
    this.service.ajoutParticipant(form.value).subscribe((app: any) =>{
      this.participant = app;
      console.log(this.participant);
      this.participation = {"participant": this.participant, "activite": this.activite};
      this.serviceAct.AjoutParticipation(this.participation).subscribe((data: any)=>{
        this.router.navigateByUrl('detail-activite/'+ this.activite.id_activite, {skipLocationChange: true}).then(()=>
        this.router.navigate(['detail-activite', this.activite.id_activite])); 
      })
      
    })
    
  }

}
