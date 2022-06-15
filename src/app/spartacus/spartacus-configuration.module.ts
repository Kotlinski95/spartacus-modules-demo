import { NgModule } from '@angular/core';
import {
  translationChunksConfig,
  translations as ENGLISH_TRANSLATIONS,
} from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
  ConfigModule,
  DeferLoadingStrategy,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';


@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002/',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        currency: ['USD'],
        language: ['en'],
        baseSite: ['electronics-spa'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: {
          ...ENGLISH_TRANSLATIONS,
        },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<ConfigModule>{
      direction: {
        detect: true,
        default: 'ltr',
        rtlLanguages: ['he', 'ar'],
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '4.3',
      },
    }),
    provideConfig(<FeaturesConfig>{
      deferredLoading: {
        strategy: DeferLoadingStrategy.DEFER,
        intersectionMargin: '50px',
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
