import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteServiceService } from '../Services/activite-service.service';

@Component({
  selector: 'app-detail-activite',
  templateUrl: './detail-activite.component.html',
  styleUrls: ['./detail-activite.component.scss']
})
export class DetailActiviteComponent implements OnInit {
  id: any;
  activite: any;
  participantParActivite: any;
  responsableParActivite: any;
  

  constructor(
    private service: ActiviteServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detail(this.id).subscribe((data: any)=>{
      this.activite = data;
    })
    this.service.ResponsableParActivite(this.id).subscribe((data:any)=>{
      this.responsableParActivite = data;
      console.log(this.responsableParActivite);

    })
    this.service.ParticipantParActivite(this.id).subscribe((data:any)=>{
      this.participantParActivite = data;
    })

   

   
  }

}
