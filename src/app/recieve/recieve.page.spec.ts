import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecievePage } from './recieve.page';

describe('RecievePage', () => {
  let component: RecievePage;
  let fixture: ComponentFixture<RecievePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecievePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
