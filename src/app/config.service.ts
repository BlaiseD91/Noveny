import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config:any;
  private configSub = new BehaviorSubject({});


  constructor(private http:HttpClient) {
    this.setLanguage('hu');
  }

  getConfig(){
    return this.configSub;
  }

  setLanguage(lang:string){
    this.http.get('../assets/lang_' + lang + '.json').subscribe(
      (response) => {
        this.config=response;
        this.configSub.next(response);
      }
    );
  }
}
