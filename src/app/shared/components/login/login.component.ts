import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth/auth.service';
import { LoginDto } from '../../../core/dto/login.dto';

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
  constructor(private router: Router, private authService: AuthService){
    this.username = '';
    this.password = '';
    this.logo = 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
  }

  submit(){
    const loginDto: LoginDto = {
      username: this.username,
      password: this.password
    }
    this.authService.login(loginDto).subscribe({
      next: (res: any) => {
        console.log("🚀 ~ LoginComponent ~ this.authService.login ~ res:", res)
        this.router.navigate(['']);
      },

      // catch: (err: any) => {
      //   console.log("🚀 ~ LoginComponent ~ this.authService.login ~ err:", err)
      // },
    }
    );
  }

  nuevoRegistro(){
    this.router.navigate(['/nuevo-registro']);
  }
}
