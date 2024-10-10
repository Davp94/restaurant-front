import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MenuService } from '../../../core/service/menu.service';
import { PlatoDto } from '../../../core/dto/plato.dto';
import { PlatoDetailComponent } from '../plato-detail/plato-detail.component';
@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDialogModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent implements OnInit{

  platoList: PlatoDto[] = [];

  constructor(private menuService: MenuService, private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.menuService.findAllPlatos().subscribe({
      next: res => this.platoList = res,
      error: err => console.log(err)
    })
  }

  openDialog(plato: PlatoDto) {
    const dialogRef = this.dialog.open(PlatoDetailComponent, {data: plato})
    dialogRef.afterClosed().subscribe(res => {

    });
  }






}
