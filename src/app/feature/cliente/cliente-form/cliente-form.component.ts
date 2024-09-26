import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Location } from '@angular/common';


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
  private formBuilder = inject(FormBuilder);
  clienteForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', Validators.required],
    correo: [null, Validators.compose([Validators.email, Validators.required])],
    nit: [null, Validators.required],
    razonSocial: null,
    password: [null, Validators.required],
  });

  onSubmit(): void {
    console.log(this.clienteForm.value);
  }
}
