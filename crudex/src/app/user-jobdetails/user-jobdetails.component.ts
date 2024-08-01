import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-user-jobdetails',
  templateUrl: './user-jobdetails.component.html',
  styleUrls: ['./user-jobdetails.component.css']
})
export class UserJobdetailsComponent implements OnInit {
  jobId: number | undefined;
  jobDetails: any;
    currentUser: any;
  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.route.params.pipe(
      switchMap(params => {
        this.jobId = params['jobID'];
        return this.http.get(`http://localhost:37954/api/jobs/${this.jobId}`);
      })
    ).subscribe(data => {
      this.jobDetails = data;
    });
  }

  onSave() {
    const apiUrl = 'http://localhost:37954/api/jobs/' + this.jobId;
    this.http.put(apiUrl, this.jobId).subscribe(
      (data: any) => {
        alert('Profile updated successfully');
      },
      error => {
        alert('Error: ' + error.message);
      }
    );
  }
}

 
  