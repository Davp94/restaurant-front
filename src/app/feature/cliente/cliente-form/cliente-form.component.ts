import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Location } from '@angular/common';
import { ClienteService } from '../../../core/service/auth/cliente.service';
import { RegisterDto } from '../../../core/dto/register.dto';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class ClienteFormComponent {
  location = inject(Location);
  clienteService = inject(ClienteService);
  private formBuilder = inject(FormBuilder);
  clienteForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', Validators.required],
    correo: ['', Validators.compose([Validators.email, Validators.required])],
    nit: ['', Validators.required],
    razonSocial: '',
    password: ['', Validators.required],
  });

  onSubmit(): void {
    if(this.clienteForm.valid){
      const formVAlues = this.clienteForm.value;
      const registerDto: RegisterDto = {
        nombre: formVAlues.nombre || '',
        apellidos: formVAlues.apellidos || '',
        correo: formVAlues.correo || '',
        nit: formVAlues.nit || '',
        razonSocial: formVAlues.razonSocial || '',
        password: formVAlues.password || '',
      }
      this.clienteService.register(registerDto).subscribe(
        {
          next: res => {
            console.log("🚀 ~ ClienteFormComponent ~ onSubmit ~ res:", res);
            return alert('Registro exitoso');
          }
        }
      )
    }
  }
}
