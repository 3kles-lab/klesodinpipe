import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { M3OdinModule } from '@infor-up/m3-odin-angular';
import { KlesOdinDatePipe } from './pipes/kles-odin-date.pipe';

@NgModule({
  declarations: [KlesOdinDatePipe],
  imports: [
    BrowserModule,
    M3OdinModule
  ],
  exports: [KlesOdinDatePipe]
})
export class KlesOdinPipeModule { }
