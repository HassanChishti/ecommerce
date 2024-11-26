import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeloCardPage } from './helo-card.page';

describe('HeloCardPage', () => {
  let component: HeloCardPage;
  let fixture: ComponentFixture<HeloCardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeloCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
