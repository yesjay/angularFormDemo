import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupTestComponent } from './form-group-test.component';

describe('FormGroupTestComponent', () => {
  let component: FormGroupTestComponent;
  let fixture: ComponentFixture<FormGroupTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
