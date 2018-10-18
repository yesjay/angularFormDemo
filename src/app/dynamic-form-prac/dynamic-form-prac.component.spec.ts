import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormPracComponent } from './dynamic-form-prac.component';

describe('DynamicFormPracComponent', () => {
  let component: DynamicFormPracComponent;
  let fixture: ComponentFixture<DynamicFormPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
