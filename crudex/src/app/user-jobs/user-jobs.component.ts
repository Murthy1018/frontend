import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-jobs',
  templateUrl: './user-jobs.component.html',
  styleUrls: ['./user-jobs.component.css']
})
export class UserJobsComponent implements OnInit {
  jobs: any[] | undefined;
  selectedJob: any;
router: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:37954/api/jobs').subscribe(jobs => {
      this.jobs = jobs;
    });
  }
  goToJobDetails(jobId: number) {
    this.router.navigate(['/jobs', jobId]);
  }
}
