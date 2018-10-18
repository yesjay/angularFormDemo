import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPracComponent } from './reactive-form-prac.component';

describe('ReactiveFormPracComponent', () => {
  let component: ReactiveFormPracComponent;
  let fixture: ComponentFixture<ReactiveFormPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
