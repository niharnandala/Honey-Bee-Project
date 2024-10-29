import { Component } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  enterPhOpt=false;
  phoneFunction(){
    this.enterPhOpt=true;
  }
  enterEmailOpt=false;
  emailFunction(){
    this.enterEmailOpt=true;
  }
}
