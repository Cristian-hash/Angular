import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name: string;
  email;
  webpage:string;
  hobbies:string[];
  showHobbies:boolean;


  constructor(){
    console.log("Constructor working...");
    this.name="Crhistian Pacori Paucar";
    this.email ="cpacori@unsa.edu.pe";
    this.webpage="http://www.unsa.edu.pe";
    this.hobbies=["futbol","programacion","netflix"];
    this.showHobbies=false;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

}
