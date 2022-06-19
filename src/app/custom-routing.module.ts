import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './custom-components/demo/demo.component';
import { Slide1Component } from './custom-components/demo/slides/slide1/slide1.component';
import { CmsPageGuard } from '@spartacus/storefront';
import { Slide2Component } from './custom-components/demo/slides/slide2/slide2.component';

const STATIC_ROUTES: Routes = [
  // ********* Loading demo page and children pages without lazyloading *********
  // {
  //   path: 'demo',
  //   component: DemoComponent,
  //   canActivate: [CmsPageGuard],
  //   children: [
  //     // { path: '', redirectTo: 'info', pathMatch: 'full' },
  //     { path: 'start', component: Slide1Component, canActivate: [CmsPageGuard] },
  //     { path: 'tags', component: Slide2Component, canActivate: [CmsPageGuard] },
  //   ],
  // },

  // ********* Loading demo page and children pages with lazyloading *********
  {
    path: 'demo',
    component: DemoComponent,
    canActivate: [CmsPageGuard],
    loadChildren: () =>
      import('./custom-components/demo/slides/slides.module').then(
        (m) => m.SlidesModule
      ),
  },
];

@NgModule({
  declarations: [],
  // imports: [CommonModule],
  imports: [CommonModule, RouterModule.forChild(STATIC_ROUTES)],
})
export class CustomRoutingModule {}
