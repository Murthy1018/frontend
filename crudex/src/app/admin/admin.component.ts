import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpApiCallerService } from '../services/api-http-call.service';
import { Observable } from 'rxjs';

interface User {
  id: number;
  email: string;
  firstname :string;
  lastname:string;
  phone : string;
  address : string;
  country : string;
  resume :string;
}
interface Job{
  jobID : number;
  jobTitle : string;
  noofposts : number;
  jobDescription : string;
  experience : string;
  specialisation : string;
  lastdatetoapply : string;
  salary : string;
  jobType : string;
  companyName : string;
  companyLogo : string;
  companyWebsite : string;
  contactEmail : string;
  companyCity : string;
  companyState : string;

  companyCountry : string;

  dateCreated : string;


}
interface Contact{
  name : string;
  email : string;
  subject : string;
  message : string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users!: Observable<any>;
  jobs!: Observable<any>;
  contacts! : Observable<any>;
  constructor(private http: HttpApiCallerService) {}

  ngOnInit() {
    this.users = this.http.get('users')
    
    this.jobs = this.http.get('jobs');

    this.contacts = this.http.get('contacts');
  }
}
