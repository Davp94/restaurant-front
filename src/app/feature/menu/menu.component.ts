import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MenuService } from '../../core/service/menu.service';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuDto } from '../../core/dto/menu.dto';
import { MatCardModule } from '@angular/material/card';
import { MenuListComponent } from './menu-list/menu-list.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, FormsModule, ReactiveFormsModule, MatCardModule, MenuListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit, OnDestroy, OnChanges{
  //1 VARIABLES DEFINITION
  menuList?: MenuDto[] = [];
  menuForm!: FormGroup;
  //2 CONSTRUCTOR
  constructor(private menuService: MenuService, private formBuilder: FormBuilder){
    this.menuForm = this.formBuilder.group({
      menus: this.formBuilder.array([])
    })
  }
  // 3 IMPLEMENTED METHODS
  ngOnInit(): void {
    console.log('STARTING COMPONENT')
    this.loadMenu();
  }

  loadMenu() {
    this.menuService.findAllMenu().subscribe({
      next: (res: MenuDto[]) => {
        this.menuList = res;
        this.buildCheckBoxForm();
      },
      error: err => console.log(err)
    })
  }

  buildCheckBoxForm() {
    this.menuList?.forEach(menu => {
      this.menusFormArray.push(
        this.formBuilder.group({
          checked: [false],
          menuName: [menu.nombre],
          id: [menu.id]
        })
      )
    })
    console.log(this.menuForm);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES DETECTED ON COMPONENT')
  }

  ngOnDestroy(): void {
    console.log('DESTORYING COMPONENT')
  }

  get menusFormArray(){
    return  this.menuForm.controls['menus'] as FormArray;
  }

  // LOGIC COMPONENT

}
