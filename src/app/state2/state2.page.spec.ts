import { ComponentFixture, TestBed } from '@angular/core/testing';
import { State2Page } from './state2.page';

describe('State2Page', () => {
  let component: State2Page;
  let fixture: ComponentFixture<State2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(State2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
