import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullProfilePage } from './full-profile.page';

describe('FullProfilePage', () => {
  let component: FullProfilePage;
  let fixture: ComponentFixture<FullProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FullProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
