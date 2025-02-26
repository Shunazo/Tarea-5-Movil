import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Psj1Page } from './psj1.page';

describe('Psj1Page', () => {
  let component: Psj1Page;
  let fixture: ComponentFixture<Psj1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Psj1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
