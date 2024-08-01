import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent {
  public contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<any>('http://localhost:37954/api/contacts', this.contact).subscribe(data => {
      alert('Message Send successfully');
      console.log(data);
  },error => {
    alert('Error: ' + error.message);
  });
  }

}
