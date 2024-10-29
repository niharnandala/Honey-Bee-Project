import { Component } from '@angular/core';

@Component({
  selector: 'app-logintraditional',
  templateUrl: './logintraditional.component.html',
  styleUrls: ['./logintraditional.component.css']
})
export class LogintraditionalComponent {
  logoUrl:string="/assets/images/tech.png";
  login={
    userId:"",
    password:"",
  }
  loginData:any;
  logIn(a:any) {
    this.loginData=a.value;
  }
}
