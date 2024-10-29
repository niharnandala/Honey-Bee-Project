import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  logoUrl:string="/assets/images/tech.png";

  user = {
    firstname:"",
    lastname :"",
    userid : "",
    nickname: "",
    email :"",
    password: "",
    phonenumber: "",
    acceptTerms : false,
  }
  onShow(){
    alert(
      "First Name:-"+this.user.firstname+" \n"+
      "Last Name:-"+this.user.lastname+" \n"+
      "User Id:-"+this.user.userid+" \n"+
      "Email:-"+this.user.email+" \n"+
      "Password:-"+this.user.password+" \n"+
      "Phone number:-"+this.user.phonenumber+" "
    );
  }
  signUpData:any;
  signup(a:any){
    this.signUpData=a.value;
    
  }
}
