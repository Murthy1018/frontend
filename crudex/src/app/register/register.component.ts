import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    country: '',
    resume: ''
  };

  constructor(private http: HttpClient, private router: Router) { }
  sendEmail() {
    if (!this.user.email) {
      return; // Don't send email if the email field is empty
    }

    const emailRequest = { To: this.user.email };

    this.http.post('http://localhost:37954/api/Email/sendemail', emailRequest).subscribe(
  (response) => {
    console.log('Email sent successfully', response);
    alert("Registartion Successful!");
    // Handle success here
  },
  (error) => {
    console.error('Email sending failed', error);
  });}
    //
  onSubmit() {
    if(this.user.email.length !=0 && this.user.password.length !=0  ){
      this.user = JSON.parse(JSON.stringify(this.user));
    this.http.post('http://localhost:37954/api/Users', this.user).subscribe
                    (res => {
                      alert("Registered Successfully");
                      console.log(res);
                      this.router.navigate(['/login']);
                    });
    }
    else{
      alert('Enter all the fields')
    }
  }

}
