import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})

export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;
  @Input() public cafeName: string = '';

  constructor(
    ){}

    ngOnInit(): void {
    } 

}
