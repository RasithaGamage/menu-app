import { NgModule } from '@angular/core';
import { CafeComponent } from './cafe/cafe.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CafeRoutingModule } from './cafe-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { NgbNavModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CafeComponent,
    MenuItemComponent,
    MenuSectionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CafeRoutingModule,
    MatTabsModule,
    NgbNavModule,
    NgbScrollSpyModule
  ],
  exports: [
    CafeComponent
  ]
})
export class CafeModule { }


