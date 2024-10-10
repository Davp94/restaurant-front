import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PlatoDto } from '../../../core/dto/plato.dto';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-plato-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule ,MatButtonModule ],
  templateUrl: './plato-detail.component.html',
  styleUrl: './plato-detail.component.scss'
})
export class PlatoDetailComponent implements OnInit{
  formOrder: FormGroup;
  platoData: PlatoDto;
  constructor(@Inject(MAT_DIALOG_DATA) data: PlatoDto, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<PlatoDetailComponent>){
    this.platoData = data;
    this.formOrder = this.formBuilder.group({
      cantidad: [0, Validators.required],
      subtotal: [0]
    })
  }

  ngOnInit(): void {
    this.formOrder.valueChanges.subscribe({
      next: changes => this.formOrder.controls['subtotal'].setValue(changes.cantidad * this.platoData.precio)
    }
    )
  }


  addPlato(){
    const subTotal = this.platoData.precio;
    this.dialogRef.close(true);
  }

  get subtotal () {
    return this.formOrder.controls['subtotal'].value as Number;
  }
}
