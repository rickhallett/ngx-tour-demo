import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgxDocsComponent } from "./ngx-docs.component";

describe("NgxDocsComponent", () => {
  let component: NgxDocsComponent;
  let fixture: ComponentFixture<NgxDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDocsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
