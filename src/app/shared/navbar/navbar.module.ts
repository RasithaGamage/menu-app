import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule 
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
