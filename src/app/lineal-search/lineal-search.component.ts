import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lineal-search',
  templateUrl: './lineal-search.component.html',
  styleUrls: ['./lineal-search.component.css']
})
export class LinealSearchComponent implements OnInit {

  stringArray = '0,1,2,3,4,5,8,13';
  numberToSearch = 13;
  array : Number[];
  pointer = 0;
  isSearching = false;
  wasFound = false;
  constructor() { }

  ngOnInit() {
  }

  search() {
    this.array = this.parseArray();
    this.isSearching = true;
    this.pointer = 0;
    this.wasFound = false;

    let intervalId = setInterval(() => {
      this.pointer++;

      if (this.array[this.pointer] === this.numberToSearch) {
        this.wasFound = true;
        this.isSearching = false;
      }

      if (this.pointer >= this.array.length || this.wasFound) {
        this.isSearching = false;
        clearInterval(intervalId);
      }
    }, 2000)
  }

  private parseArray() : Number[] {
    return this.stringArray.split(',')
      .map(stringNumber => {
        return parseInt(stringNumber);
      });
  }

}
