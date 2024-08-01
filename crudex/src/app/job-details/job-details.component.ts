import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpApiCallerService } from '../services/api-http-call.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobId: number | undefined;
  jobDetails!: Observable<any>;
    currentUser: any;
  constructor(private route: ActivatedRoute, private http: HttpApiCallerService,private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.jobId = this.route.snapshot.params['id'];
    this.jobDetails = this.http.get('jobs', this.jobId);
  }
  onApplyNowClick() {
    console.log(this.jobId, this.currentUser)
    // Show an alert
    // alert('Application submitted successfully!');

    let obj = {
      "userId": this.currentUser?.id.toString(), 
      "jobId": this.jobId?.toString()
  }

    this.http.postPromise('jobs/apply', obj).then(r => {
      alert('Application submitted successfully!');
      this.router.navigate(['/jobs']);
    });
    // Navigate to the profile component
    // this.router.navigate(['/jobs']); // Replace 'profile' with the actual route path to your profile component
  }
  onSubmit() {
    // Show an alert
    alert('Application submitted successfully!');

    // Navigate to the profile component
    this.router.navigate(['/profile']); // Update the route as per your application's routing configuration
  }

  applyForJob(jobId: number) {
    const userId = ''; //this.currentUser.userID;

    const body = { userId, jobId };


    this.http.post('appliedjobs', body).toPromise();
    // .subscribe({
    //   next: () => {
    //     alert('Applied to job!');
    //     this.jobDetails.applied = true; // update the UI to show that the job has been applied to
    //   },
    //   error: () => {
    //     alert('Applied to job');
    //   }
    // });
  }
}
