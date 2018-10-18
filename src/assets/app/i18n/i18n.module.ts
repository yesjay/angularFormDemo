import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MultiTranslateHttpLoaderService } from '../../../app/core/multi-translate-http-loader.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  console.log('hi');
  return new MultiTranslateHttpLoaderService(httpClient, [
    { prefix: 'assets/test/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [ HttpClient ]
      }
    })
  ],
  exports: [
    TranslateModule,
  ]

})

export class TranslateChildModule {

}