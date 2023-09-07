import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  firstName = "Manoj"
  secondName = "Kumar"
  show = 'yes'
  getFullName(firstName:string, secondName:string){
    alert(`Your full name is ${firstName} ${secondName}`)
  }
  getFunction(val:string){
    console.warn(`Your name is ${val}`);
  }
  getData(value:string){
    console.warn(value)
  }
  displayValue=''
  getValue(name:string){
    console.warn(name)
    this.displayValue = name
  }
  count = 0
  counter(type:string){
    type === 'add' ? this.count++ : this.count--
  }
}
  
