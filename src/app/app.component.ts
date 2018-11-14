import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Bienvenido a Angular';
  proyecto:string = 'Aplicacion con Spring 5 con Angular 7';
  createdBy:string = 'Felix De la Cruz - Software Engineer';
}
