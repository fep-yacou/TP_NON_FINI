import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantServiceService } from '../Services/participant-service.service';

@Component({
  selector: 'app-modifier-participant',
  templateUrl: './modifier-participant.component.html',
  styleUrls: ['./modifier-participant.component.scss']
})
export class ModifierParticipantComponent implements OnInit {

  participant: any;
  id:any;

  constructor( private service: ParticipantServiceService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailParticipant(this.id).subscribe((data:any) => {
      this.participant = data;
      console.log(this.participant);
      
    })
  }

  onUpdate(){
    this.service.updateParticipant(this.id,this.participant).subscribe((data:any) => {
      console.log("Participant Modifé :" +data);
      this.router.navigate(['/liste-participant']);
    },
    error => console.error(error)
    );
  }
}
