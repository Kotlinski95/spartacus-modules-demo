import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { CmsPageGuard, OutletPosition, provideOutlet } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { CmsConfig, provideConfig } from '@spartacus/core';

class customCmsPageGuard {
  canActivate(): boolean {
    return false;
  }
}

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: DemoComponent,
    //     canActivate: [CmsPageGuard],
    //     data: {
    //       pageLabel: 'demo',
    //     },
    //   },
    // ]),
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
