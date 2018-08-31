import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PuppyViewerComponent } from './puppy-viewer/puppy-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PuppyViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
