import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantServiceService } from '../Services/participant-service.service';

@Component({
  selector: 'app-detail-participant',
  templateUrl: './detail-participant.component.html',
  styleUrls: ['./detail-participant.component.scss']
})
export class DetailParticipantComponent implements OnInit {

    id: any;
    participant:any;

  constructor(
    private service: ParticipantServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailParticipant(this.id).subscribe((data:any) => {
      this.participant = data;
    })
  }


}
