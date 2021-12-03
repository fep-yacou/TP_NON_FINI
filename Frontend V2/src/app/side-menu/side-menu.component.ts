import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
admin: any;
adminConnect: any
  constructor() { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
    //console.log("userConnect=======", this.adminConnect);
  }

}
