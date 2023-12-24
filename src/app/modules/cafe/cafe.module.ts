import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe/cafe.component';
import { MenuItemComponent } from './menu-item/menu-item.component';



@NgModule({
  declarations: [
    CafeComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CafeModule { }
