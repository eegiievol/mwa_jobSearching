import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobType } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  #apiBaseUrl: string = 'http://localhost:8080/api/jobs'
  constructor(private http: HttpClient) { }

  public getJobs(): Promise<JobType[]> {
    console.log("get jobs called");
    const url: string = this.#apiBaseUrl;

    return this.http
      .get(url)
      .toPromise()
      .then((response: any) => response as JobType[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('Something went wrong', error);
    return Promise.reject(error.message || error);
  }
}
