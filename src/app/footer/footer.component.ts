import  { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  author:string = 'Felix De la Cruz';
  title:string = 'Software Engineer'
}
