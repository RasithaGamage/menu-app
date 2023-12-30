import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.scss'
})
export class MenuSectionComponent {

  @Input() menuItemList: any;

  getLocalizationVal(obj: any): string{
    return  obj[Object.keys(obj)[0]].name
  }

}
