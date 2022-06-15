import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const STATIC_ROUTES: Routes = [
  // {
  //   path: 'demo',
  //   loadChildren: () =>
  //     import('./custom-components/demo/demo.module').then((m) => m.DemoModule),
  // },
];

@NgModule({
  declarations: [],
  // imports: [CommonModule],
  imports: [CommonModule, RouterModule.forChild(STATIC_ROUTES)],
})
export class CustomRoutingModule {}
