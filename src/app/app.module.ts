import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './core/material.module';
import { TranslateChildModule } from '../assets/app/i18n/i18n.module';
import { FormGroupTestComponent } from './form-group-test/form-group-test.component';
import { TryValidationlinkComponent } from './try-validationlink/try-validationlink.component';

import { ForbiddenValidatorDirective } from './try-validationlink/shared/forbidden-name.directive';
import { ReactiveFormPracComponent } from './reactive-form-prac/reactive-form-prac.component';
import { TemplateDrivenPracComponent } from './template-driven-prac/template-driven-prac.component';
import { DynamicFormPracComponent } from './dynamic-form-prac/dynamic-form-prac.component';
import { QuestionComponent } from './dynamic-form-prac/shared/question/question.component';

import { ErrorMessageComponent, SelectComponent } from './widget';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MultiTranslateHttpLoaderService } from './core/multi-translate-http-loader.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  console.log('app');
  return new MultiTranslateHttpLoaderService(httpClient, [
    { prefix: 'assets/app/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    FormGroupTestComponent,
    TryValidationlinkComponent,
    ForbiddenValidatorDirective,
    ReactiveFormPracComponent,
    TemplateDrivenPracComponent,
    DynamicFormPracComponent,
    QuestionComponent,
    ErrorMessageComponent,
    SelectComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [ HttpClient ]
      }
    }),
    
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
