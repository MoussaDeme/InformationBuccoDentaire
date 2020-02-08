import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerPage } from './cancer.page';

describe('CancerPage', () => {
  let component: CancerPage;
  let fixture: ComponentFixture<CancerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
