import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpBrowserComponent } from './trump-browser.component';

describe('TrumpBrowserComponent', () => {
  let component: TrumpBrowserComponent;
  let fixture: ComponentFixture<TrumpBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
