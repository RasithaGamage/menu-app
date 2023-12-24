import { Component } from '@angular/core';
import { GlobalService } from './core/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    public gs: GlobalService
  ){}

  title = 'menu-app';
}
