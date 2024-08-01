import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
  // userType: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  onLoginSubmit() {
    if (!this.email || !this.password) {
         alert("Please enter both email and password.");
       }
       else{
    const apiUrl = 'http://localhost:37954/api/users/' + this.email + '/' + this.password;
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (this.email === 'admin@gmail.com' && this.password === 'admin@123') {
          this.router.navigate(['/admin']);
        } else if (data && data.email === this.email && data.password === this.password) {
          localStorage.setItem('currentUser', JSON.stringify(data));
          console.log(data);
          this.router.navigateByUrl('');//.navigate(['/home']);
        } else {
          alert('Invalid credentials');
        }
      },
      error => {
        alert('Error: ' + error.message);
      }
    );
  }
}
}
