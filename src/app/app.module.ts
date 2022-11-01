import { SubmitTaxFilingModule } from './submit-tax-filing/submit-tax-filing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule,SubmitTaxFilingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
