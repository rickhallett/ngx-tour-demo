import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleContactsComponent } from './rule-contacts.component';

describe('TrumpsRulesItemContactsComponent', () => {
  let component: RuleContactsComponent;
  let fixture: ComponentFixture<RuleContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
