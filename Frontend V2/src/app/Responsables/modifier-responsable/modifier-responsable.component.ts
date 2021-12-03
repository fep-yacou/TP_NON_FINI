import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableServiceService } from '../Services/responsable-service.service';

@Component({
  selector: 'app-modifier-responsable',
  templateUrl: './modifier-responsable.component.html',
  styleUrls: ['./modifier-responsable.component.scss']
})
export class ModifierResponsableComponent implements OnInit {
  
  idResp : any;
  respons : any;
  constructor(
    private service : ResponsableServiceService,
    private route : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.idResp = this.route.snapshot.params['id'];
    this.service.detailResponsable(this.idResp).subscribe((data : any)=>{
    this.respons = data});
  }

  modifierResp(){
    this.service.modifierResponsable(this.idResp, this.respons).subscribe((data:any)=>{
      this.router.navigate(['liste-responsable']);
    })
  }

}
