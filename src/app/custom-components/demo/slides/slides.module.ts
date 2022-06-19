import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { DemoService } from 'src/app/services/demo.service';



@NgModule({
  declarations: [Slide1Component, Slide2Component],
  imports: [
    CommonModule,
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
      {
        path: '1',
        component: Slide1Component,
        canActivate: [CmsPageGuard],
        data: {
          pageLabel: '1',
        },
      },
      {
        path: '2',
        component: Slide2Component,
        canActivate: [CmsPageGuard],
        data: {
          pageLabel: '2',
        },
      },
    ]),
  ],
  providers: [DemoService],
  exports: [Slide1Component, Slide2Component],
})
export class SlidesModule {}
