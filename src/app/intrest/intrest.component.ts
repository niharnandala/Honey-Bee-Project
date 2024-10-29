import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-intrest',
  templateUrl: './intrest.component.html',
  styleUrls: ['./intrest.component.css']
})
export class IntrestComponent implements OnInit{

  interestData=[
    "Artificial_Intelligence",
    "Data_Science",
    "Cyber_Security",
    "Internet_of_Things",
    "HTML",
    "CSS",
    "Java_Script",
    "Angular",
    "Chip_designing"
  ]
  data="";
  ngOnInit(): void {
      this.sendDataAll();
  }
  sendDataAll(){
    this.local.alltopics=this.interestData;
  }
  displayingdata=this.data.split(" ");
  display(){
    let interested_data=this.data.split(" ");
    this.local.interestedStudents=interested_data;
    
    console.log(interested_data);
    //console.log(this.data);
  }
  constructor(private local:InterestService){}
}
