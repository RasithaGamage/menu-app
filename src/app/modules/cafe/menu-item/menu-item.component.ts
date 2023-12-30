import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() public itemData: any = {} ;

  getLocalizationVal(obj: any): string{
    return  obj[Object.keys(obj)[0]].name
   }
   
 }
