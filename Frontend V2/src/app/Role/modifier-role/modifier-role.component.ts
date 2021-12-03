import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleServiceService } from '../Services/role-service.service';

@Component({
  selector: 'app-modifier-role',
  templateUrl: './modifier-role.component.html',
  styleUrls: ['./modifier-role.component.scss']
})
export class ModifierRoleComponent implements OnInit {
id : any;
role: any;
  constructor(
    private service: RoleServiceService,
    public route: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailRole(this.id).subscribe((data: any)=>{
      this.role = data;
    })
  }

  updateRole(){
    this.service.modifierRole(this.id, this.role).subscribe((data:any)=>{
        this.router.navigate(['liste-role']);
    })
  }

}
