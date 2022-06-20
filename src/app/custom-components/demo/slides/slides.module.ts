import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';
import { DemoService } from 'src/app/services/demo.service';
import { SlidesComponent } from './slides.component';

@NgModule({
  declarations: [SlidesComponent],
  imports: [CommonModule, RouterModule],
  // providers: [DemoService],
  exports: [SlidesComponent],
})
export class SlidesModule {}
