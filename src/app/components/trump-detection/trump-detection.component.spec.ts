import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpDetectionComponent } from './trump-detection.component';

describe('TrumpDetectionComponent', () => {
  let component: TrumpDetectionComponent;
  let fixture: ComponentFixture<TrumpDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
