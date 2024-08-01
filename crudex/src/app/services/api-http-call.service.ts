import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpApiCallerService {

    private baseApiUrl: string = 'http://localhost:37954/api/';

    constructor(private httpClient: HttpClient) {

    }
    get(uri: string, param?: any): Observable<any> {
        param = (param == null || param == undefined) ? '' : param;
        return this.httpClient.get(`${this.baseApiUrl}${uri}/${param}`);
    }

    post(uri: string, apiBody?: any): Observable<any> {
        return this.httpClient.post(`${this.baseApiUrl}${uri}`, apiBody ? apiBody : {});
    }

    postPromise(uri: string, apiBody?: any): Promise<any> {
        return this.post(uri, apiBody).toPromise();
    }

    getPromise(uri: string, param?: any): Promise<any> {
        return this.get(uri, param).toPromise();
    }
}