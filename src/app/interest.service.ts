import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private http:HttpClient) { }

  interestedStudents:any;
  alltopics:any;
  // apiURL="";

  Getdata():Observable<any> {
    return this.http.get(this.interestedStudents);
  }
}
