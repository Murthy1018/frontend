import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.css']
})

export class NewjobComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      noofposts: [0, Validators.required],
      jobDescription: ['', Validators.required],
      experience: ['', Validators.required],
      specialisation: ['', Validators.required],
      lastDateToApply: ['', Validators.required],
      salary: [0, Validators.required],
      jobType: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        website: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
      }),
      dateCreated: ['']
    });
  }
    ngOnInit(): void {
    this.form = this.fb.group({
      jobTitle: ['', Validators.required],
      noofposts: [0, Validators.required],
      jobDescription: ['', Validators.required],
      experience: ['', Validators.required],
      specialisation: ['', Validators.required],
      lastDateToApply: ['', Validators.required],
      salary: [0, Validators.required],
      jobType: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        website: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
      }),
      dateCreated: ['']
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = {
        id: 0,
        jobTitle: this.form.value.jobTitle,
        noofposts: this.form.value.noofposts,
        jobDescription: this.form.value.jobDescription,
        experience: this.form.value.experience,
        specialisation: this.form.value.specialisation,
        lastDateToApply: this.form.value.lastDateToApply,
        salary: this.form.value.salary,
        jobType: this.form.value.jobType,
        company: {
          name: this.form.value.company.name,
          website: this.form.value.company.website,
          email: this.form.value.company.email,
          city: this.form.value.company.city,
          state: this.form.value.company.state,
          country: this.form.value.company.country,
        },
        dateCreated: this.form.value.dateCreated
      };

      this.http.post<any>('http://localhost:37954/api/jobs', formData).subscribe(
        data => {
          alert('Job Created Successfully');
          console.log(data);
        },
        error => {
          if (error.status === 400) {
            const validationErrors = error.error;
            alert('Validation Errors: ' + JSON.stringify(validationErrors));
          } else {
            alert('An error occurred');
          }
          console.error(error);
        }
      );
    }
  }
}
  