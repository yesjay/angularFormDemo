import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNg6LibbComponent } from './example-ng6-libb.component';

describe('ExampleNg6LibbComponent', () => {
  let component: ExampleNg6LibbComponent;
  let fixture: ComponentFixture<ExampleNg6LibbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNg6LibbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNg6LibbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
