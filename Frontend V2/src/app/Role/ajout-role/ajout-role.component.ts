import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleServiceService } from '../Services/role-service.service';

@Component({
  selector: 'app-ajout-role',
  templateUrl: './ajout-role.component.html',
  styleUrls: ['./ajout-role.component.scss']
})
export class AjoutRoleComponent implements OnInit {
role: any;
  constructor(
    private service: RoleServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // fonction d'ajout des rôles
  ajoutRole(form: NgForm){
    console.log(form.value);
    this.service.ajoutRole(form.value).subscribe((data: any)=>{
      this.role = data;
      this.router.navigate(['liste-role']);
    })
  }

}
