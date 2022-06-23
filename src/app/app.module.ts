import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { IonutComponent } from './ionut/ionut.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    IonutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
