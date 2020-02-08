import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinPage } from './soin.page';

describe('SoinPage', () => {
  let component: SoinPage;
  let fixture: ComponentFixture<SoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
