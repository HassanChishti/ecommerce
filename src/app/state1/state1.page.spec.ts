import { ComponentFixture, TestBed } from '@angular/core/testing';
import { State1Page } from './state1.page';

describe('State1Page', () => {
  let component: State1Page;
  let fixture: ComponentFixture<State1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(State1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
