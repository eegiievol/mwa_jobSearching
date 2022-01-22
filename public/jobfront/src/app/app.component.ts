import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';


export class JobType{
  #title!: String;
  #salary!: Number;

  get title(){
    return this.#title
  }
  get salary(){
    return this.#salary
  }
  constructor(title: String, salary: Number){
    this.#salary=salary;
    this.#title = title;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  jobs: JobType[] = []
  title = 'jobfront';

  constructor (private myservice: MyServiceService){}

  ngOnInit(): void{
    this.myservice.getJobs().then((jobs)=>{
      this.jobs = jobs;
    })
  }
}
