import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HygienePage } from './hygiene.page';

describe('HygienePage', () => {
  let component: HygienePage;
  let fixture: ComponentFixture<HygienePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HygienePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HygienePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
