import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { MdSidenavModule, MdToolbarModule, MdMenuModule, MdIconModule } from '@angular/material';*/
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { LinealSearchComponent } from './lineal-search/lineal-search.component';
import { HashSearchComponent } from './hash-search/hash-search.component';

@NgModule({
  declarations: [
    AppComponent,
    BinarySearchComponent,
    LinealSearchComponent,
    HashSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
