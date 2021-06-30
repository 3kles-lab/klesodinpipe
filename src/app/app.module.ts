import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { M3OdinModule } from '@infor-up/m3-odin-angular';
import { KlesOdinDatePipe, KlesOdinPipeModule } from 'kles-odin-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    M3OdinModule,
    KlesOdinPipeModule
  ],
  providers: [KlesOdinDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
