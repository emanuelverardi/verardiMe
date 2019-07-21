import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  currentYear = null;
  constructor() {
    this.currentYear = moment().year();
  }

  ngOnInit() {
  }
}
