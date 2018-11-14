import  { Component } from '@angular/core';
@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  listCourse:string[] = ['TypeScript', 'JavaScript', 'Java', 'SpringFramework'];
  available:boolean = true;

  setAvailable():void {
    this.available = (this.available==true)? false : true
  }
}
