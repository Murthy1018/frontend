import { Component,OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public imageUrl: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    const imagePath = 'assets/images/jobim.svg';
    this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(imagePath);
  }
}
