import { Component, OnInit } from '@angular/core';
import { HttpApiCallerService } from '../services/api-http-call.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  currentUser: any;

  constructor(private http: HttpApiCallerService) {}

  appliedJobs!: Observable<any>;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.appliedJobs = this.http.get('AppliedJobs/AppliedJobsByUserId', this.currentUser.id);
  }

}
