import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
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
