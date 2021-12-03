import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
admin: any;
adminConnect: any;
  constructor() { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }

}
