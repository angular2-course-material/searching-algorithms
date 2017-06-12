import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealSearchComponent } from './lineal-search.component';

describe('LinealSearchComponent', () => {
  let component: LinealSearchComponent;
  let fixture: ComponentFixture<LinealSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinealSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
