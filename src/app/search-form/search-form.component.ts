import { Component, Output, EventEmitter } from '@angular/core';

import {Search} from '../search-form/search.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  @Output() search = new EventEmitter<Search>();

  arrayAsString= '1,1,2,3,5,8,13,21';
  number = 13;

  onSearchClick() {
    const array = this.parseArray();
    this.search.emit(new Search(this.number, array));
  }

  private parseArray(): number[] {
    return this.arrayAsString.split(',')
      .map(stringNumber => {
        return parseInt(stringNumber);
      });
  }

}
