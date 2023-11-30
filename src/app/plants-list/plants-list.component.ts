import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent {
adatok:any;

  constructor(private base:BaseService){
    this.base.getData().subscribe(
      (res) => {
        this.adatok=res
      }
    );
  }
}
