import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsableServiceService } from '../Services/responsable-service.service';

@Component({
  selector: 'app-liste-responsable',
  templateUrl: './liste-responsable.component.html',
  styleUrls: ['./liste-responsable.component.scss']
})
export class ListeResponsableComponent implements OnInit {
  listeRespon : any;
  searchText = '';
  constructor(
    private service : ResponsableServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listesResponsables();
  }

  async listesResponsables(){
    return this.service.listeResponsable().subscribe((data : any)=>{
      this.listeRespon= data ;   
    })
  }

  deleteResp(data: any){
    this.service.deleteResponsable(data).subscribe((datas: any)=>{
      window.location.reload();
      this.router.navigateByUrl('/liste-responsable', {skipLocationChange: true}).then(()=>
      this.router.navigate(['liste-responsable'])); 
    })
  }

}
