import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import {
  CmsPageGuard,
  OutletPosition,
  provideOutlet,
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { Slide1Component } from './slides/slide1/slide1.component';
import { Slide2Component } from './slides/slide2/slide2.component';
import { SlidesModule } from './slides/slides.module';

class customCmsPageGuard {
  canActivate(): boolean {
    return false;
  }
}

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    SlidesModule,
    RouterModule.forChild([
      // {
      //   path: '',
      //   component: DemoComponent,
      //   canActivate: [CmsPageGuard],
      //   children: [
      //     // { path: '', redirectTo: 'info', pathMatch: 'full' },
      //     { path: 'start', component: Slide1Component, canActivate: [CmsPageGuard] },
      //     { path: 'tags', component: Slide2Component, canActivate: [CmsPageGuard] },
      //   ],
      // },

      // {
      //   path: 'end',
      //   loadChildren: () =>
      //     import('./slides/slides.module').then((m) => m.SlidesModule),
      // },
    ]),
  ],
  providers: [
    // provideOutlet({
    //   id: 'Section2',
    //   position: OutletPosition.REPLACE,
    //   component: DemoComponent,
    // }),

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
