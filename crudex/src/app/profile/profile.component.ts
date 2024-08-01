import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpApiCallerService } from '../services/api-http-call.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  resumePath: any = null;

  constructor(private httpClient: HttpClient, private router: Router, private http: HttpApiCallerService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);

    if(this.currentUser.resume && this.currentUser.resume != '') {
      this.resumePath = this.currentUser.resume;
    }
  }

  upload(files: any) {
    let file = files[0];
    const formData = new FormData();
    formData.append(file.name, file);
    this.http.postPromise(`AppliedJobs/upload/${this.currentUser.id}`, formData).then(res => {
      this.resumePath = res;
      // alert('Resume uploaded successfully');
    });
  
  }

  onSave() {
    const apiUrl = 'http://localhost:37954/api/users/' + this.currentUser.userID;
    this.httpClient.put('users', this.currentUser).subscribe(
      (data: any) => {
        alert('Profile updated successfully');
      },
      error => {
        alert('Profile updated successfully');
      }
    );
  }
}
