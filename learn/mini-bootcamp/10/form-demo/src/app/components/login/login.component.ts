import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // Implement login logic later
    }
  }
}
