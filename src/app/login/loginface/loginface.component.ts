import { Component } from '@angular/core';

@Component({
  selector: 'app-loginface',
  templateUrl: './loginface.component.html',
  styleUrls: ['./loginface.component.css']
})
export class LoginfaceComponent {
  user = {
  
    nickname :"",
  }
  funalert(){
    alert("Your nick name is: "+this.user.nickname)
  }
}

