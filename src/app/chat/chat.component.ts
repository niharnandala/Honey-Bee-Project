import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
// import Pusher from 'pusher-js';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  constructor(
    public localService:UserService,
    private http:HttpClient
  ) { }
    username:any='Delta';

  message =null;
  messages = [
    {'username':'Midhun','message':'Hello'},
    {'username':'Murali','message':'Hi'},
    {'username':'Navya','message':"Let's talk about the project?"},
    {'username':'Madhav','message':"What's going on?"}
  ];

  

  ngOnInit(): void {
  //   Pusher.logToConsole = true;

  //   const pusher = new Pusher('c481b86815ed439e9ceb', {
  //     cluster: 'ap2'
  //   });

  //   var channel = pusher.subscribe('my-channel');
  //   channel.bind('my-event', function(data: any) {
  //     alert(JSON.stringify(data));
  //   });

  //   // const channel = pusher.subscribe('chat');
  //   // channel.bind('message', data => {
  //   //   this.messages.push(data);
  //   // });
  }

  submit(): void {
    // this.http.post('http://localhost:4200/api/messages', {
    //   username: this.username,
    //   message: this.message
    // }).subscribe(() => this.message = '');
  }
}
