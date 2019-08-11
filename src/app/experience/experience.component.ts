import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
  jobList: any = [];

  constructor(public restApi: RestApiService, route:ActivatedRoute) {
    route.params.subscribe(val => {
    });
  }
  ngOnInit() {
    this.getExperience();
  }
  // Get employees list
  getExperience() {
    return this.restApi.getExperience().subscribe((data: {}) => {
      this.jobList = data;
      console.log('Getting experience');
      console.log(this.jobList);
    });
  }
}
