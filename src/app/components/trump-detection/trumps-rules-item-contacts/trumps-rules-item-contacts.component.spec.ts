import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpsRulesItemContactsComponent } from './trumps-rules-item-contacts.component';

describe('TrumpsRulesItemContactsComponent', () => {
  let component: TrumpsRulesItemContactsComponent;
  let fixture: ComponentFixture<TrumpsRulesItemContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpsRulesItemContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpsRulesItemContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
