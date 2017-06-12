import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinealSearchComponent } from './lineal-search/lineal-search.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { HashSearchComponent } from './hash-search/hash-search.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'lineal-search',
        component: LinealSearchComponent
      },
      {
        path: 'binary-search',
        component: BinarySearchComponent
      },
      {
        path: 'hash-search',
        component: HashSearchComponent
      },
      {
        path: '',
        redirectTo: '/lineal-search',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
