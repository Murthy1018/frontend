import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpApiCallerService } from '../services/api-http-call.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];
  selectedJob: any;
  router: any;
  searchTerm: string = '';
  private searchSubject: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:37954/api/jobs').subscribe(response => {
      this.jobs = response;
    });
    this.searchSubject.pipe(
      debounceTime(300), // wait 300ms after the last event before emitting the latest event
      distinctUntilChanged(), // only emit if value is different from the previous value
      switchMap((term: string) => this.http.get<any[]>(`http://localhost:37954/api/jobs/jobTitle/${term}`))
    ).subscribe(
      data => {
        this.jobs = data;
      },
      error => {
        console.error('Error fetching jobs', error);
        this.jobs = [];
      }
    );

  }
  searchJobs() {
    if (this.searchTerm.length !== 0) { this.searchSubject.next(this.searchTerm); }
    else {
      this.http.get<any[]>('http://localhost:37954/api/jobs').subscribe(response => {
        this.jobs = response;
      });
    }
  }
  goToJobDetails(jobId: number) {
    this.router.navigate(['jobDetails'], jobId);
  }
}