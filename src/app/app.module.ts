import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustomRoutingModule } from "./custom-routing.module";
import { DemoModule } from "./custom-components/demo/demo.module";
import { CmsConfig, provideConfig } from "@spartacus/core";

@NgModule({
  declarations: [AppComponent],
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
    // DemoModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
