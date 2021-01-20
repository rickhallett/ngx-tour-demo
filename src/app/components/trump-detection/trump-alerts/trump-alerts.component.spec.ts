import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpAlertsComponent } from './trump-alerts.component';

describe('TrumpAlertsComponent', () => {
  let component: TrumpAlertsComponent;
  let fixture: ComponentFixture<TrumpAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
