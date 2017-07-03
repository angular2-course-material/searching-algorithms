import { Component } from '@angular/core';

import { Search } from '../search-form/search.model';

@Component({
  selector: 'app-lineal-search',
  templateUrl: './lineal-search.component.html',
  styleUrls: ['./lineal-search.component.css']
})
export class LinealSearchComponent {

  currentSearch: Search;
  pointer = 0;
  isSearching = false;
  wasFound = false;

  onSearch(search: Search) {
    this.currentSearch = search;
    this.isSearching = true;
    this.pointer = 0;
    this.wasFound = false;

    const intervalId = setInterval(() => {
      this.pointer++;

      if (search.array[this.pointer] === search.number) {
        this.wasFound = true;
        this.isSearching = false;
      }

      if (this.pointer >= search.array.length || this.wasFound) {
        this.isSearching = false;
        clearInterval(intervalId);
      }
    }, 2000)
  }
}
