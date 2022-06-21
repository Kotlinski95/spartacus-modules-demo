import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleTestComponent } from './module-test.component';
import { CmsConfig, provideConfig } from '@spartacus/core';



@NgModule({
  declarations: [ModuleTestComponent],
  imports: [CommonModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ModuleTestComponent: {
          component: ModuleTestComponent,
        },
      },
    }),
  ],
})
export class ModuleTestModule {}
