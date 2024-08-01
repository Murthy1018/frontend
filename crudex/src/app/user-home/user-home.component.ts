import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  public imageUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const imagePath = 'assets/images/jobim.svg';
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }
}
