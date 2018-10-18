import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryValidationlinkComponent } from './try-validationlink.component';

describe('TryValidationlinkComponent', () => {
  let component: TryValidationlinkComponent;
  let fixture: ComponentFixture<TryValidationlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryValidationlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryValidationlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
