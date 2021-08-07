import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = ["ryan", "joe", "cameron", "john"];
  activated = false;


  title = 'my-dream-app';
  name: string;
  age: number;
  email;
  webpage: string;
  hobbies: string[];
  showHobbies: boolean;
  posts = [] as any;

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
    this.name = 'Crhistian Ziegler Pacori Paucar';
    this.age = 25;
    this.email = 'cpacori@unsa.edu.pe';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ["Futbol", "Programacion", "Netflix"];
    this.showHobbies = false;
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
  newHobby(hobby: any) {
    console.log(hobby.value);
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
  sayHello() {
    alert("hola desde app.component")
  }

  deleteUser(user: any) {
    for (let i = 0; i < this.users.length; i++) {
      if (user == this.users[i]) {
        this.users.splice(i, 1);
      }
    }
  }
  addUser(newUser: any) {
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}
