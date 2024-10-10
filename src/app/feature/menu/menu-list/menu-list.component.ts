import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MenuService } from '../../../core/service/menu.service';
@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent implements OnInit{
  
  platoList: any = []

  constructor(private menuService: MenuService){}
  ngOnInit(): void {
    this.menuService.findAllPlatos().subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    })
  }


}
