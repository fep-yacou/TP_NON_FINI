import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss']
})
export class ProfilUserComponent implements OnInit {
admin: any;
adminConnect: any;
  constructor() { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin);
  }

}
