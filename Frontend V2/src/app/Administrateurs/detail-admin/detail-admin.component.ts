import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdminService } from '../Services/service-admin.service';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.scss']
})
export class DetailAdminComponent implements OnInit {
  id: any;
  admin: any
  constructor(
    private service: ServiceAdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailAdmin(this.id).subscribe((data: any)=>{
    this.admin = data;
    })
  }

}
