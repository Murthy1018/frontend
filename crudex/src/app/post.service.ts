import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpApiCallerService } from './services/api-http-call.service';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpApiCallerService) { }

  createJob(job: any): Observable<any> {
    return this.http.post('jobs', job);
  }
}
  // Add other methods for retrieving and updating items as needed
