import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  public api:string;
  public environment: string;

  constructor() {
    console.log('constructor');
    this.api = environment.api;
    this.environment = environment.name;
    console.log(this.environment);
    console.log(this.api);

  }

  async ngOnInit(){
    //Hide ion-tab-bar while scrolling, just like LinkedIn app
    console.log('init');
    console.log(environment.api);
    console.log(environment.name);

    let content = document.querySelector('ion-content');
    content.scrollEvents = true;
    content.addEventListener('ionScrollStart', () => {
          document.querySelector('ion-tab-bar').style.display = 'none';
    });
    content.addEventListener('ionScrollEnd', () => {
          document.querySelector('ion-tab-bar').style.display = 'flex';
    });

  }

}
