import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationPageComponent } from './certification-page.component';

describe('CertificationPageComponent', () => {
  let component: CertificationPageComponent;
  let fixture: ComponentFixture<CertificationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
