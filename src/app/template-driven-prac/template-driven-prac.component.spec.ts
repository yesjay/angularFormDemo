import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenPracComponent } from './template-driven-prac.component';

describe('TemplateDrivenPracComponent', () => {
  let component: TemplateDrivenPracComponent;
  let fixture: ComponentFixture<TemplateDrivenPracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenPracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
