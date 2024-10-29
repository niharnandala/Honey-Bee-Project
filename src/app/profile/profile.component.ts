
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string="Delta";
  constructor(
    public  localService:UserService
  ){}
  


  edit=false;
  nameDisplay=true;
  editProfile() {
    this.edit=true;
    this.username="";
    this.nameDisplay=false;
  }
  modifiedName(){
    this.nameDisplay=true;
    this.edit=false;
    this.localService.username=this.username;
    console.log(this.username);
  }


  //posts,followers,following
  Posts=294;
  Followers:number=296;
  Following:number=297;

  quote:string="Using this Garudaastra social media platform you can get more knowledge on particular thing which you have choosen......";

  imgPath =[
    {path:"/assets/images/profile1.jpg"},
    {path:"/assets/images/profile2.jpg"},
    {path:"/assets/images/profile3.png"},
    {path:"/assets/images/profile4.jpg"},
    {path:"/assets/images/profile5.jpg"},
    {path:"/assets/images/profile6.jpg"},
    {path:"/assets/images/profile7.webp"},
    {path:"/assets/images/profile8.jpg"},
    {path:"/assets/images/profile9.jpg"},

  ]

}
