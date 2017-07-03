import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule } from '@angular/material'
import { SearchFormComponent } from './search-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    SearchFormComponent
  ],
  exports: [
    FormsModule,
    SearchFormComponent
  ]
})
export class SearchFormModule { }
