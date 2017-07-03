import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdButtonModule } from '@angular/material'
import { SearchFormComponent } from './search-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    SearchFormComponent
  ],
  exports: [
    ReactiveFormsModule,
    SearchFormComponent
  ]
})
export class SearchFormModule { }
