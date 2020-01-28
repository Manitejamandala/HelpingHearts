import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinvolvedPageComponent } from './getinvolved-page.component';

describe('GetinvolvedPageComponent', () => {
  let component: GetinvolvedPageComponent;
  let fixture: ComponentFixture<GetinvolvedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetinvolvedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetinvolvedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
