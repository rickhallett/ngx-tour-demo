import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpsRulesItemComponent } from './trumps-rules-item.component';

describe('TrumpsRulesItemComponent', () => {
  let component: TrumpsRulesItemComponent;
  let fixture: ComponentFixture<TrumpsRulesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpsRulesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpsRulesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
