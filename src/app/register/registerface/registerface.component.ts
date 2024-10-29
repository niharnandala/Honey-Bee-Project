import { Component } from '@angular/core';

@Component({
  selector: 'app-registerface',
  templateUrl: './registerface.component.html',
  styleUrls: ['./registerface.component.css']
})
export class RegisterfaceComponent {
  user = {
    username:"",
    nickname :"",
    
    email :"",
    phonenumber: "",
    acceptTerms : false,
  }
}
