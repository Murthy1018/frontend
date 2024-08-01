import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit{
  jobId: number | undefined;
  jobDetails: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.jobId = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:18273/api/jobs/${this.jobId}`).subscribe(data => {
      this.jobDetails = data;
    });
  }
  onSave() {
    this.jobId = this.route.snapshot.params['id'];
    const apiUrl = 'http://localhost:37954/api/jobs/' + this.jobId;
    this.http.put(apiUrl, this.jobId).subscribe(
      (data: any) => {
        alert('Job updated successfully');
      },
      error => {
        alert('Error: ' + error.message);
      }
    );
  }
}
