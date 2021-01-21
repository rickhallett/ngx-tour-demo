import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpsRulesItemContactsItemComponent } from './trumps-rules-item-contacts-item.component';

describe('TrumpsRulesItemContactsItemComponent', () => {
  let component: TrumpsRulesItemContactsItemComponent;
  let fixture: ComponentFixture<TrumpsRulesItemContactsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpsRulesItemContactsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpsRulesItemContactsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
