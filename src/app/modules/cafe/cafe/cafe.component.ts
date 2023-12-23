import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-cafe',
    templateUrl: './cafe.component.html',
    styleUrl: './cafe.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CafeComponent implements OnInit {

    cafeName: string = '';

    constructor( private routes: ActivatedRoute){}

    ngOnInit(): void {
        this.routeResolver()
      } 
  
      routeResolver(){
          this.routes.paramMap.subscribe((params: ParamMap)=>{
              this.cafeName = params.get('resturantCode') as string;
          });
      }

}
