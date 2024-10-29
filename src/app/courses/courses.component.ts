import { Component, OnInit } from '@angular/core';
import { InterestService } from '../interest.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  ngOnInit(): void {
    this.getData();
  }
  constructor(private local:InterestService){}
  topics:any;
  //topics:any=["Artificial_Intelligence","Data_Science"];
  alltopics:any;
  getData(){
    this.topics=this.local.interestedStudents
    //this.topics=this.local.alltopics;
    this.alltopics=this.local.alltopics;
    console.log("hi");
    console.log(this.alltopics);
  }
  
  contents:any=[
    //Artificial_Intelligence
    {
      course:"Artificial_Intelligence",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/artificialintelligenceUdemy.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"Artificial_Intelligence Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Artificial_Intelligence",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/artificialintelligenceTelsuko.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"Artificial_Intelligence Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Artificial_Intelligence",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/artificialintelligenceCoursera.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"Artificial_Intelligence Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Artificial_Intelligence",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/artificialintelligenceCoincent.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"Artificial_Intelligence Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Artificial_Intelligence",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/artificialintelligenceArrow.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"Artificial_Intelligence Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Artificial_Intelligence",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/artificialintelligenceArrowByjus.jpg",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"Artificial_Intelligence Lorem ipsum dolor sit amet consect"
    },
    //Data_Science
    {
      course:"Data_Science",
      platform:"Udemy",
      cost:"400",
      platformbanner:"assets/images/courses/DS1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"Data_Science Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Data_Science",
      platform:"Telsuko",
      cost:"2000",
      platformbanner:"assets/images/courses/DS2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"Data_Science Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Data_Science",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/DS3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"Data_Science Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Data_Science",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/DS4.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"Data_Science Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Data_Science",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/DS5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"Data_Science Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Data_Science",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/DS6.jpg",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"Data_Science Lorem ipsum dolor sit amet consect"
    },
    //Cyber_Security
    {
      course:"Cyber_Security",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/CS1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"Cyber_Security Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Cyber_Security",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/CS2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"Cyber_Security Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Cyber_Security",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/CS3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"Cyber_Security Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Cyber_Security",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/CS4.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"Cyber_Security Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Cyber_Security",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/CS5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"Cyber_Security Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Cyber_Security",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/CS6.jpg",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"Cyber_Security Lorem ipsum dolor sit amet consect"
    },
    //Internet_of_Things
    {
      course:"Internet_of_Things",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/IOT1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"Internet_of_Things Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Internet_of_Things",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/IOT2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"Internet_of_Things Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Internet_of_Things",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/IOT3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"Internet_of_Things Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Internet_of_Things",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/IOT4.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"Internet_of_Things Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Internet_of_Things",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/IOT5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"Internet_of_Things Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Internet_of_Things",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/IOT6.jpg",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"Internet_of_Things Lorem ipsum dolor sit amet consect"
    },
    //HTML
    {
      course:"HTML",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/HTML1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"HTML Lorem ipsum dolor sit amet consect"
    },
    {
      course:"HTML",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/HTML2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"HTML Lorem ipsum dolor sit amet consect"
    },
    {
      course:"HTML",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/HTML3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"HTML Lorem ipsum dolor sit amet consect"
    },
    {
      course:"HTML",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/HTML4.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"HTML Lorem ipsum dolor sit amet consect"
    },
    {
      course:"HTML",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/HTML5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"HTML Lorem ipsum dolor sit amet consect"
    },
    {
      course:"HTML",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/HTML6.jpg",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"HTML Lorem ipsum dolor sit amet consect"
    },
    //CSS
    {
      course:"CSS",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/CSS1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"CSS Lorem ipsum dolor sit amet consect"
    },
    {
      course:"CSS",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/CSS2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"CSS Lorem ipsum dolor sit amet consect"
    },
    {
      course:"CSS",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/CSS3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"CSS Lorem ipsum dolor sit amet consect"
    },
    {
      course:"CSS",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/CSS4.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"CSS Lorem ipsum dolor sit amet consect"
    },
    {
      course:"CSS",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/CSS5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"CSS Lorem ipsum dolor sit amet consect"
    },
    {
      course:"CSS",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/CSS6.jpg",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"CSS Lorem ipsum dolor sit amet consect"
    },
    //Java_Script
    {
      course:"Java_Script",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/JS1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"Java_Script Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Java_Script",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/JS2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"Java_Script Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Java_Script",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/JS3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"Java_Script Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Java_Script",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/JS4.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"Java_Script Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Java_Script",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/JS5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"Java_Script Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Java_Script",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/JS6.jpg",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"Java_Script Lorem ipsum dolor sit amet consect"
    },
    //Angular
    {
      course:"Angular",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/A1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"Angular Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Angular",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/A2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"Angular Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Angular",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/A3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"Angular Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Angular",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/A4.png",
      coursebanner:"assets/images/courses/coincent.png",
      description:"Angular Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Angular",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/A5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"Angular Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Angular",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/A6.png",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"Angular Lorem ipsum dolor sit amet consect"
    },
    //Chip_designing
    {
      course:"Chip_designing",
      platform:"Udemy",
      cost:"700",
      platformbanner:"assets/images/courses/CHIP1.jpg",
      coursebanner:"assets/images/courses/udemy.png",
      description:"Chip_designing Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Chip_designing",
      platform:"Telsuko",
      cost:"2500",
      platformbanner:"assets/images/courses/CHIP2.jpg",
      coursebanner:"assets/images/courses/telsuko.png",
      description:"Chip_designing Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Chip_designing",
      platform:"Coursera",
      cost:"1000",
      platformbanner:"assets/images/courses/CHIP3.jpg",
      coursebanner:"assets/images/courses/coursera.jpg",
      description:"Chip_designing Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Chip_designing",
      platform:"Coincent",
      cost:"3000",
      platformbanner:"assets/images/courses/CHIP4.jpg",
      coursebanner:"assets/images/courses/coincent.png",
      description:"Chip_designing Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Chip_designing",
      platform:"Arrow",
      cost:"3000",
      platformbanner:"assets/images/courses/CHIP5.jpg",
      coursebanner:"assets/images/courses/arrow.jpeg",
      description:"Chip_designing Lorem ipsum dolor sit amet consect"
    },
    {
      course:"Chip_designing",
      platform:"Byjus",
      cost:"3000",
      platformbanner:"assets/images/courses/CHIP6.png",
      coursebanner:"assets/images/courses/byjus.jpg",
      description:"Chip_designing Lorem ipsum dolor sit amet consect"
    }
  ]
}


