import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { DemoService } from 'src/app/services/demo.service';
import { SlidesComponent } from './slides.component';

@NgModule({
  declarations: [Slide1Component, Slide2Component, SlidesComponent],
  imports: [
    CommonModule,
    // **** Leftover *****
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     children: [
    //       { path: 'start', component: Slide1Component },
    //       { path: 'end', component: Slide2Component },
    //     ],
    //   },
    // ]),

    RouterModule.forChild([
      // ***** If we want to start  from demo/start instead of demo. *****
      // {
      //   path: '',
      //   redirectTo: 'start',
      //   component: Slide1Component,
      // },
      // { path: 'start', component: Slide1Component },

      // **** Leftover *****
      // {
      //   path: '2',
      //   component: Slide2Component,
      //   canActivate: [CmsPageGuard],
      //   data: {
      //     pageLabel: '2',
      //   },
      // },

      // ******  Add this path with hardcoded page routing with loadchildren in custom routing module ******
      // {
      //   path: 'start',
      //   component: Slide1Component,
      //   // canActivate: [CmsPageGuard],
      //   // resolve: { resolvedData: ProductResolver },
      // },

      // ***** Only for path changing! *****
      // {
      //   path: ':id',
      //   component: SlidesComponent,
      //   // canActivate: [CmsPageGuard],
      //   // resolve: { resolvedData: ProductResolver },
      // },
    ]),
  ],
  // providers: [DemoService],
  exports: [Slide1Component, Slide2Component, SlidesComponent],
})
export class SlidesModule {}
