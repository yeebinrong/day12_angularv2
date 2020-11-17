import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fontsizev2';
  message = 'hello 123';
  fontSize = '10';
  font:number = parseInt(this.fontSize);

  onSizeChange(value) {
    this.fontSize = `${value}em`;
    this.font = parseInt(this.fontSize);
  }
}
