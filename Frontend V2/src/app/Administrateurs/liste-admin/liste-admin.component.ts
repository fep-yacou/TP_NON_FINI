import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdminService } from '../Services/service-admin.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.scss']
})
export class ListeAdminComponent implements OnInit {
  listAdmin: any = [];
  searchText= '';

  constructor(
    private service : ServiceAdminService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.listeAdm();
  }

  async listeAdm(){
      return this.service.listeAdmin().subscribe((data: any)=>{
        let liste = data;
        for(let i=0; i<liste.length; i++){
          if(liste[i].etat == 'active')
          this.listAdmin.push(liste[i]);
        }
      })
  }

  deleteAdmin(data: any){
    this.service.detailAdmin(data).subscribe((datas: any)=>{
      datas.etat = "inactive";
      let datasMod = datas;
      console.log(datasMod);
      this.service.updateAdmin(datasMod.id, datasMod).subscribe((mod: any)=>{
        window.location.reload();
      this.router.navigateByUrl('/liste-admin', {skipLocationChange: true}).then(()=>
      this.router.navigate(['liste-admin'])); 
      })
    })
  }
}
