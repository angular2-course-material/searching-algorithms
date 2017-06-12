import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
