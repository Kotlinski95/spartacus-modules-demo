import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { RouterModule } from '@angular/router';



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
  ],
  exports: [Slide1Component, Slide2Component],
})
export class SlidesModule {}
