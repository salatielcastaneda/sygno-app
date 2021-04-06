import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sygno-app';
  hola = 'Mundo!';
  today =  new Date(); 

  nVariable = 0;
  
  aumentar():void{
    this.nVariable += 10;
  }
  disminuir():void{
    this.nVariable -= 10;
  }

}
