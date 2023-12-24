import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GlobalService } from '../../../core/services/global.service';
import { CafeService } from '../services/cafe.service';
import { ApiResult } from '../../../core/models/http/http.model';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CafeComponent implements OnInit {

  constructor(
    private routes: ActivatedRoute,
    public gs: GlobalService,
    private cafeService: CafeService
  ) {}

  ngOnInit(): void {
    this.routeResolver();
  }

  routeResolver() {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let resturantCode = params.get('resturantCode') as string;
      this.loadCafeData(resturantCode);
    });
  }

  loadCafeData(resturantCode: string){
    this.cafeService.fetchSiteData(resturantCode).subscribe((response: ApiResult)=>{
        this.gs.cafeName.set(response.data.entity.displayName);
    });
  }
}
