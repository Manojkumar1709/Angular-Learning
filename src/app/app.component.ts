import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Manoj';
  data = 100;
  users = ['Angular','TypeScript','Java Script', 'Node jS', 'React'];
  deatils = [
    {
      name : 'Manoj',
      email : 'manoj@test.com',
      phone : '8123045679',
      social : ['google', 'insta', 'facebook']
    },
    {
      name : 'ravi',
      email : 'ravi@test.com',
      phone : '9876543210',
      social : ['yahoo', 'linkedin', 'facebook']
    },
    {
      name : 'Ram',
      email : 'ram@test.com',
      phone : '6789012345',
      social : ['google', 'insta', 'linkedin']
    },
    {
      name : 'peter',
      email : 'peter@test.com',
      phone : '7890123456',
      social : ['yahoo', 'insta', 'gmail']
    }
  ]
  color = 'orange';
  bgColor = 'green';
  updateColor(){
    this.color = 'blue'
    this.bgColor = 'aqua'
  }
  userData:any={};
  getData(data:NgForm){
    console.warn(data);
    this.userData = data;
  }
  display = true
 toggle(){
  this.display = !this.display
 }
}
