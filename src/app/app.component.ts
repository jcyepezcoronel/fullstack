import { Component } from '@angular/core';
import * as data from '../assets/json/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullstack';

  dataJson:  any  = (data  as  any).default;
  arrow:boolean = false;
  isContentOpen: boolean = false;
  
  ngOnInit() {
    console.log("esto es json", this.dataJson);
  }

  handleChange(e: boolean, section: { name: any }): void {
    if (e) {
      console.log("ejeeeelee");
    }
  }


  doSomethingOnToggle(elem: HTMLElement){
    elem.className = 'prueba';
  }
}


