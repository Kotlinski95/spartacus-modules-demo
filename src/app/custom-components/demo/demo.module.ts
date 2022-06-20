import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';

import { CmsConfig, ConfigModule, provideConfig } from '@spartacus/core';
import { SlidesModule } from './slides/slides.module';
import { DemoService } from 'src/app/services/demo.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    SlidesModule,
    RouterModule,
    ConfigModule.withConfig({
      layoutSlots: {
        ContentPage1Template: {
          lg: {
            slots: ['Section2A', 'Section2B', 'Section4'],
          },
          slots: ['Section5', 'Section4'],
        },
      },
    }),
  ],
  providers: [
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
  constructor() {}
}
