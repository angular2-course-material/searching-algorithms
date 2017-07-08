import { Component, OnInit } from '@angular/core';

import { Search } from '../search-form/search.model';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.css']
})
export class BinarySearchComponent {
  currentSearch: Search;
  pointer = 0;
  isSearching = false;
  wasFound = false;
  minIndex = 0;
  maxIndex = 0;

  isDisabled(number) {
    return (number < this.minIndex || number > this.maxIndex) && number !== this.pointer;
  }

  onSearch(search: Search) {
    this.currentSearch = search;
    this.isSearching = true;
    this.pointer = 0;
    this.wasFound = false;
    this.minIndex = 0;
    this.maxIndex = search.array.length - 1;

    const intervalId = setInterval(() => {
      this.pointer = (this.minIndex + this.maxIndex) / 2 | 0;

      if (search.array[this.pointer] === search.number) {
        this.wasFound = true;
        this.isSearching = false;
      } else if (search.array[this.pointer] < search.number) {
        this.minIndex = this.pointer + 1;
      } else if (search.array[this.pointer] > search.number) {
        this.maxIndex = this.pointer - 1;
      }

      if (this.minIndex > this.maxIndex || this.wasFound) {
        this.isSearching = false;
        clearInterval(intervalId);
      }
    }, 3000)
  }
}
