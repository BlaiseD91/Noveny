import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  messages:any;
  lang=false;

  constructor(private config:ConfigService) {
    config.getConfig().subscribe(
      (res:any) => this.messages = res.nav
    )
  }

  //nyelvváltás
  langSwitch(event:any){
    if(event.target.checked) this.config.setLanguage('hu')
    else this.config.setLanguage('en')
  }
}
