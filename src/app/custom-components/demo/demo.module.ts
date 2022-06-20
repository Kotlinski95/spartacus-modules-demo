import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import {
  CmsPageGuard,
  OutletPosition,
  provideOutlet,
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule, provideConfig } from '@spartacus/core';
import { Slide1Component } from './slides/slide1/slide1.component';
import { Slide2Component } from './slides/slide2/slide2.component';
import { SlidesModule } from './slides/slides.module';
import { DemoService } from 'src/app/services/demo.service';
import { SlidesComponent } from './slides/slides.component';

class customCmsPageGuard {
  canActivate(): boolean {
    return false;
  }
}

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    // ***** Import SlidesModule directly (when called even if there is another lazyloaded call this will load eagerly) *****
    // If SlidesModule is lazyloaded there is issue with Not Found Breadcrums Title.
    SlidesModule,
    // RouterModule.forChild([
      // ***** There is no need to add forChild even with lazyloaded or eager loading *****
      // {
      // path: 'demo',
      // component: DemoComponent,
      // canActivate: [CmsPageGuard],
      // children: [
      // {
      //   path: 'start',
      //   component: Slide1Component,
      //   canActivate: [CmsPageGuard],
      // },
      // {
      //   path: 'tags',
      //   component: Slide2Component,
      //   canActivate: [CmsPageGuard],
      // },
      // {
      //   path: ':id',
      //   component: SlidesComponent,
      // },
      // ],
      // },
      // {
      //   path: '1',
      //   loadChildren: () =>
      //     import('./slides/slides.module').then((m) => m.SlidesModule),
      // },
    // ]),



    // ConfigModule.withConfig({
    //   layoutSlots: {
    //     header: {
    //       lg: {
    //         slots: [
    //           'SiteLogo',
    //           'SiteContext',
    //           'SearchBox',
    //           'SiteLogin',
    //           'MiniCart',
    //           'SiteLinks',
    //           'NavigationBar',
    //         ],
    //       },
    //     },
    //     ContentPage1Template: {
    //       lg: {
    //         slots: ['Section1', 'Section5', 'Section4'],
    //       },
    //       slots: ['Section5', 'Section4'],
    //     },
    //   },
    // }),
  ],
  providers: [
    // **** Leftover after test with differents CMS page slot positions
    // provideOutlet({
    //   id: 'Section2B',
    //   position: OutletPosition.REPLACE,
    //   component: DemoComponent,
    // }),

    // **** If called in lazyloaded demo module it creates new instance of service ****
    DemoService,

    // **** Overwrite CMS Flex Component with DemoComponent content ****
    provideConfig(<CmsConfig>{
      cmsComponents: {
        DemoComponent: {
          component: DemoComponent,
        },
      },
    }),
  ],
})
export class DemoModule {
  constructor() {
    console.log('DEMOMODULE INIT');
  }
}
