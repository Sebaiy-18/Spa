import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFramWorkComponent } from './start-fram-work.component';

describe('StartFramWorkComponent', () => {
  let component: StartFramWorkComponent;
  let fixture: ComponentFixture<StartFramWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartFramWorkComponent]
    });
    fixture = TestBed.createComponent(StartFramWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
