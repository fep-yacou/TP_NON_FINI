import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleServiceService } from '../Services/role-service.service';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.scss']
})
export class ListeRoleComponent implements OnInit {

  listerole: any;

  constructor(
    private service: RoleServiceService,
    private router: Router
  ) { }

  ngOnInit(){
    this.liste();
  }

  //fonction permettant de lister les rôles
  async liste(){
    return this.service.listeRole().subscribe((data:any)=>{
      this.listerole = data;
    });
  }

  deleteRole(data: any){
    this.service.deleteRole(data).subscribe((data: any)=>{
      window.location.reload();
      this.router.navigateByUrl('/liste-role', {skipLocationChange: true}).then(()=>
      this.router.navigate(['liste-role'])); 
    })
  }

}
