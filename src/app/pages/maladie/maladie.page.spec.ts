import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladiePage } from './maladie.page';

describe('MaladiePage', () => {
  let component: MaladiePage;
  let fixture: ComponentFixture<MaladiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaladiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaladiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
