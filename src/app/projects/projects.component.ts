import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private httplocal: InterestService) {

  }
  topicstr: any;

  assign() {

    this.topicstr=this.httplocal.interestedStudents;
    //this.topicstr = this.httplocal.alltopics;
  }

  // assign(){
  //   return this.httplocal.interestedStudents.subscribe((responce:{}) => {
  //     let data:any=responce;
  //     this.topicstr=data;
  //   });
  // }
  ngOnInit(): void {
    this.assign();
  }
  //AI
  // Plagiarism Analyzer. ...
  // Prediction of Bird Species. ...
  // Dog and Cat Classification. ...
  // Next Word Prediction. ...
  // Face Mask Detection. ...
  // Heart Disease Prediction.

  //DS
  // Yoga Poses Detection using OpenPose.
  // Credit Card Fraud Detection System Python.
  // Recipe Recommendation from the Ingredients Flutter App.
  // Chatbot Assistant System using Python.
  // Movie Success Prediction System using Python.
  // Speech Emotion Detection System using Python.

  contents = [
    {
      course: "Artificial_Intelligence",
      project: "Plagiarism Analyzer",
      image: "/assets/images/projects/AIplagiarism.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Artificial_Intelligence",
      project: "Prediction of Bird Species",
      image: "/assets/images/projects/AI2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Artificial_Intelligence",
      project: "Dog and Cat Classification",
      image: "/assets/images/projects/AI3.gif",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Artificial_Intelligence",
      project: "Next Word Prediction",
      image: "/assets/images/projects/AI4.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Artificial_Intelligence",
      project: "Face Mask Detection",
      image: "/assets/images/projects/AI5.webp",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Artificial_Intelligence",
      project: "Heart Disease Prediction",
      image: "/assets/images/projects/AI6.png",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Data_Science",
      project: "Yoga Poses Detection using OpenPose",
      image: "/assets/images/projects/DS1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Data_Science",
      project: "Speech Emotion Detection System using Python",
      image: "/assets/images/projects/DS2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Data_Science",
      project: "Credit Card Fraud Detection System Python",
      image: "/assets/images/projects/DS3.png",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Data_Science",
      project: "Recipe Recommendation from the Ingredients Flutter App",
      image: "/assets/images/projects/DS4.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Data_Science",
      project: "Chatbot Assistant System using Python",
      image: "/assets/images/projects/DS5.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Cyber_Security",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/CS1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },{
      course: "Cyber_Security",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/CS2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Internet_of_Things",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/IOT1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Internet_of_Things",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/IOT2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "HTML",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/HTML1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "HTML",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/HTML2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "CSS",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/CSS1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "CSS",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/CSS2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Java_Script",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/JS1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Java_Script",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/JS2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Angular",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/A1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Angular",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/A2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Chip_designing",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/CHIP1.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    },
    {
      course: "Chip_designing",
      project: "Movie Success Prediction System using Python",
      image: "/assets/images/projects/CHIP2.jpg",
      technologies: ["Document Source Analysis", "Algorithms of NLP"],
    }
  ]

}
