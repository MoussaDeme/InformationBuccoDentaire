import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEssentielPage } from './info-essentiel.page';

describe('InfoEssentielPage', () => {
  let component: InfoEssentielPage;
  let fixture: ComponentFixture<InfoEssentielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoEssentielPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEssentielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
