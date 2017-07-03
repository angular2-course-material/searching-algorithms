import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Search} from '../search-form/search.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<Search>();
  @Input() disableSearch = false;

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.searchForm = this.formBuilder.group({
      'array': ['1,1,2,3,5,8,13,21', [
          Validators.required,
          Validators.pattern(/^(\d+,)*(\d+)$/)
        ]
      ],
      'number': [13,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10)
        ]
      ]
    });
  }

  onSubmit() {
    const formValues = this.searchForm.value;
    formValues.array = this.parseArray(formValues.array);
    this.search.emit(formValues);
  }

  private parseArray(array): number[] {
    return array.split(',')
      .map(stringNumber => {
        return parseInt(stringNumber);
      });
  }
}
