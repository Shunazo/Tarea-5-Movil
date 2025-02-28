import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Momento1Page } from './momento1.page';

describe('Momento1Page', () => {
  let component: Momento1Page;
  let fixture: ComponentFixture<Momento1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Momento1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
