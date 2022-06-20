import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppRoutingModule,
  OutletPosition,
  provideOutlet,
} from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustomRoutingModule } from './custom-routing.module';
import { DemoModule } from './custom-components/demo/demo.module';
import { CmsConfig, ConfigModule, provideConfig } from '@spartacus/core';
import { DemoHomePageComponent } from './custom-components/demo-home-page/demo-home-page.component';
import { DemoService } from './services/demo.service';
import { Slide2Component } from './custom-components/demo/slides/slide2/slide2.component';

@NgModule({
  declarations: [AppComponent, DemoHomePageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserTransferStateModule,
    CustomRoutingModule,
    DemoModule,
    // ConfigModule.withConfig({
    //   layoutSlots: {
    //     header: {
    //       lg: {
    //         slots: [
    //           'SiteLogo',
    //           // 'SiteContext',
    //           'SearchBox',
    //           'SiteLogin',
    //           'MiniCart',
    //           'SiteLinks',
    //           'NavigationBar',
    //         ],
    //       },
    //     },
    //     LandingPage2Template: {
    //       lg: {
    //         slots: ['Section1', 'Section5', 'Section4'],
    //       },
    //       slots: ['Section5', 'Section4'],
    //     },
    //   },
    // }),
    // ****** Show another way to replace existing components with DemoHomePageComponent */
    // ConfigModule.withConfig({
    //   cmsComponents: {
    //     DemoHomePageComponent: {
    //       component: DemoHomePageComponent,
    //     },
    //   },
    // } as CmsConfig),
  ],
  providers: [
    // provideConfig(<CmsConfig>{
    //   featureModules: {
    //     DemoModule: {
    //       module: () =>
    //         import('./custom-components/demo/demo.module').then(
    //           (m) => m.DemoModule
    //         ),
    //       cmsComponents: ['DemoComponent'],
    //     },
    //   },
    // }),

    DemoService,
    provideConfig(<CmsConfig>{
      cmsComponents: {
        DemoHomePageComponent: {
          component: DemoHomePageComponent,
        },
      },
    }),

    // provideOutlet({
    //   id: 'BottomHeaderSlot',
    //   position: OutletPosition.REPLACE,
    //   component: Slide2Component,
    // }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
