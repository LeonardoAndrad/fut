import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiassPage } from './noticiass.page';

describe('NoticiassPage', () => {
  let component: NoticiassPage;
  let fixture: ComponentFixture<NoticiassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
