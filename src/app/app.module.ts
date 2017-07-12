import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DatatableService } from './datatable/datatable.service'; 

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatatableService],
  bootstrap: [AppComponent],
  exports: [DatatableComponent]
})
export class AppModule { }
