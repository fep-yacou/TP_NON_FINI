import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsableServiceService } from '../Services/responsable-service.service';

@Component({
  selector: 'app-detail-responsable',
  templateUrl: './detail-responsable.component.html',
  styleUrls: ['./detail-responsable.component.scss']
})
export class DetailResponsableComponent implements OnInit {

  idResp : any;
  respons : any;
  constructor(
    private service : ResponsableServiceService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idResp = this.route.snapshot.params['id'];
    this.service.detailResponsable(this.idResp).subscribe((data : any)=>{
    this.respons = data;
    console.log("===========", this.respons);
    })
  }

}
