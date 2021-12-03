import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any;
  password:any;
  private user:any;

  constructor( private service: LoginServiceService, private route: Router) {

  }

  ngOnInit(): void {
  }

  onLogin(loginForm:any) {
    this.service.verifier(loginForm.login, loginForm.password)
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            localStorage.setItem('userData', JSON.stringify(data))
           this.route.navigateByUrl('accueil');
          }
        }
      )
  }


}
