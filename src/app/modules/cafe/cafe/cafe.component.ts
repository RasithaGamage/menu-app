import { ChangeDetectionStrategy, Component, type OnInit, ElementRef, AfterViewInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GlobalService } from '../../../core/services/global.service';
import { CafeService } from '../services/cafe.service';
import { ApiResult } from '../../../core/models/http/http.model';
import { mergeMap, tap } from 'rxjs/operators'
import { Category, Menu } from '../../../core/models/cafe/menu.model';
import { Cafe } from '../../../core/models/cafe/cafe.model';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CafeComponent implements OnInit, AfterViewInit {
  elements: any;
  menuItemList: Category[] = [];
  cafeData: Cafe;
  menuData: Menu;

  constructor(
    private routes: ActivatedRoute,
    public gs: GlobalService,
    private cafeService: CafeService,
    private elem: ElementRef
  ) {}

  ngOnInit(): void {
    this.routeResolver();
  }

  ngAfterViewInit(){
    this.elements = this.elem.nativeElement.querySelectorAll('app-menu-section');
}
  routeResolver() {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let resturantCode = params.get('resturantCode') as string;
      this.loadCafeData(resturantCode);
    });
  }

  loadCafeData(resturantCode: string){
    this.cafeService.fetchSiteData(resturantCode).pipe(
      mergeMap(res => {
        this.cafeData = res.data.entity;
        this.gs.cafeName.set(res.data.entity.displayName);
        console.log('cafeData',this.cafeData);
        return this.cafeService.fetchMenuData(res.data.entity.organizationId);
      })).subscribe((response: ApiResult)=>{
        this.menuData = response.data.entity;
        this.menuItemList = this.menuData.publishedVersion.categories;
        console.log('menuData',this.menuData);
    });
  }

  scrollTo(event: any) {
    const selectedLabel =  event.target.childNodes[0].textContent ?? event.target.querySelector('.mdc-tab__text-label').childNodes[0].textContent;
    let idVal: string = this.menuItemList.find(i=>this.getLocalizationVal(i.localizations) === selectedLabel)?.id ?? '';
    let elementMatch: HTMLElement| undefined;
    for (let index = 0; index < this.elements.length; index++) {
      if (this.elements[index].id == idVal) {
        elementMatch = this.elements[index];
        break;
      }
    }
   if(elementMatch){
    elementMatch.scrollIntoView()
   }

  }

  getScrollSpyThreshold(): number {
    if (window.innerWidth>1550) {
      return 1;
    } 
    if (window.innerWidth>500) {
      return 0.5;
    } 
    else if (window.innerWidth>400) {
      return 0.1;
    } else {
      return 0.1;
    }
  }

  getSelectedTabIndex(activeTabId: string): number {
    return this.menuItemList.findIndex(i=> i.id === activeTabId);
  }

  getLocalizationVal(obj: any): string{
   return  obj[Object.keys(obj)[0]].name
  }
}
