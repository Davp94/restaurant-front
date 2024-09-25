import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string;
  password: string;
  logo: string;
  constructor(private router: Router){
    this.username = '';
    this.password = '';
    this.logo = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
  }

  submit(){
    alert(`Login application with credentials: username: ${this.username}, password: ${this.password}`);
    localStorage.setItem('token', 'jkdknsjkdjkddsadwqe.fsdfdsfsdfdsadsa');
    this.router.navigate(['']);
  }

  nuevoRegistro(){
    this.router.navigate(['/nuevo-registro']);
  }
}
