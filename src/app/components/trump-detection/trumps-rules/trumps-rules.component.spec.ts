import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpsRulesComponent } from './trumps-rules.component';

describe('TrumpsRulesComponent', () => {
  let component: TrumpsRulesComponent;
  let fixture: ComponentFixture<TrumpsRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpsRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
