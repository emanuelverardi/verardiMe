import {Component, OnInit} from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'verardi';

  constructor() {
  }

  ngOnInit() {
    this.loadScript('../assets/theme/js/theme.js');
    this.loadScript('../assets/theme/js/views/view.contact.js');
    this.loadScript('../assets/theme/vendor/rs-plugin/js/jquery.themepunch.tools.min.js');
    this.loadScript('../assets/theme/vendor/rs-plugin/js/jquery.themepunch.revolution.min.js');
    this.loadScript('../assets/theme/js/views/view.contact.js');
    this.loadScript('../assets/theme/js/demos/demo-resume.js');
    this.loadScript('../assets/theme/js/custom.js');
    this.loadScript('../assets/theme/js/theme.init.js');
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}


