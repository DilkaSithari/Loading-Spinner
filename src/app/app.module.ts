import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
  declarations: [AppComponent, LoadingComponent, Com1Component, Com2Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
