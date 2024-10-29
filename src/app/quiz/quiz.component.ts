import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  logoUrl: string = "/assets/images/techbook.png";
  constructor(private local: InterestService) { }
  topics: any;
  
  
  alltopics:any;
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.topics=this.local.interestedStudents;
    this.alltopics=this.local.alltopics;
  }
  contents:any=[
    //AI
    {course:"Artificial_Intelligence",question:"Is Artificial Intelligence is specialization in CSE?"},
    {course:"Artificial_Intelligence",question:"Is Artificial Intelligence is about Making a machine Intelligent?"},
    {course:"Artificial_Intelligence",question:"Was Andrew Ng inventor of Artificial Intelligence?"},
    {course:"Artificial_Intelligence",question:"Is the goal of Artificial IntelligenceTo solve artificial problems?"},
    {course:"Artificial_Intelligence",question:"Is Language understanding application of Artificial Intelligence?"},
    {course:"Artificial_Intelligence",question:"Is Puzzlinga component of Artificial Intelligence?"},
    //DS
    {course:"Data_Science",question:"Is Data Science is specialization in CSE?"},
    {course:"Data_Science",question:"Is java the most important language for data science?"},
    {course:"Data_Science",question:"Is William S. Cleveland the father od datasciencs?"},
    {course:"Data_Science",question:"Is Data science is the process of diverse set of data through processing data?"},
    {course:"Data_Science",question:"Do Advanced Computing a component for data science?"},
    {course:"Data_Science",question:"Does Data Visualization is one of the key data science skills?"},
    //CS
    {course:"Cyber_Security",question:"Is Cyber Security is specialization in CSE?"},
    {course:"Cyber_Security",question:"Cyber Security is also know as information technology?"},
    {course:"Cyber_Security",question:"Is bob Thomas th father of cyber security?"},
    {course:"Cyber_Security",question:"Threat prevention features of cyber security?"},
    {course:"Cyber_Security",question:"AES is not a cybercrime?"},
    {course:"Cyber_Security",question:"Database is a component of cyber security?"},
    //IOT
    {course:"Internet_of_Things",question:"Is Internet of things is specialization in CSE?"},
    {course:"Internet_of_Things",question:"Is Internet of things is specialization in CSE?"},
    {course:"Internet_of_Things",question:"Is Internet of things is specialization in CSE?"},
    {course:"Internet_of_Things",question:"Is Internet of things is specialization in CSE?"},
    {course:"Internet_of_Things",question:"Is Internet of things is specialization in CSE?"},
    {course:"Internet_of_Things",question:"Is Internet of things is specialization in CSE?"},
    //HTML
    {course:"HTML",question:"Is Internet of things is specialization in CSE?"},
    {course:"HTML",question:"Is HTML a good course?"},
    {course:"HTML",question:"Is HTML a good course?"},
    {course:"HTML",question:"Is HTML a good course?"},
    {course:"HTML",question:"Is HTML a good course?"},
    {course:"HTML",question:"Is HTML a good course?"},
    
    //CSS
    {course:"CSS",question:"Is Internet of things is specialization in CSE?"},
    {course:"CSS",question:"Is CSS a good course?"},
    {course:"CSS",question:"Is CSS a good course?"},
    {course:"CSS",question:"Is CSS a good course?"},
    {course:"CSS",question:"Is CSS a good course?"},
    {course:"CSS",question:"Is CSS a good course?"},
    
    //JS
    {course:"Java_Script",question:"Is Internet of things is specialization in CSE?"},
    {course:"Java_Script",question:"Is Java Script a good course?"},
    {course:"Java_Script",question:"Is Java Script a good course?"},
    {course:"Java_Script",question:"Is Java Script a good course?"},
    {course:"Java_Script",question:"Is Java Script a good course?"},
    {course:"Java_Script",question:"Is Java Script a good course?"},
        
    //Angular
    {course:"Angular",question:"Is Angular a framework?"},
    {course:"Angular",question:"Is Angular a good course?"},
    {course:"Angular",question:"Is Angular a good course?"},
    {course:"Angular",question:"Is Angular a good course?"},
    {course:"Angular",question:"Is Angular a good course?"},
    {course:"Angular",question:"Is Angular a good course?"},
    
    //CHIP
    {course:"Chip_designing",question:"Is Chip desinging is specialization in CSE?"},
    {course:"Chip_designing",question:"Is Chip designing a good course?"},
    {course:"Chip_designing",question:"Is Chip designing a good course?"},
    {course:"Chip_designing",question:"Is Chip designing a good course?"},
    {course:"Chip_designing",question:"Is Chip designing a good course?"},
    {course:"Chip_designing",question:"Is Chip designing a good course?"},
    
  ]
}
