import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.sass']
})
export class PersonalDetailsComponent implements OnInit {
  API = 'https://verardimeapi.appspot.com';
  personalDetails: any = [];

  constructor(public restApi: RestApiService, route:ActivatedRoute) {
    route.params.subscribe(val => {
    });
  }

  ngOnInit() {
    this.getPersonalDetails();
  }

  getPersonalDetails() {
    return this.restApi.getPersonalDetails().subscribe((data: {}) => {
      this.personalDetails = data;
      console.log('Getting personal details');
      console.log(this.personalDetails);
    });
  }

}
