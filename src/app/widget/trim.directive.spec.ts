import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TrimDirective } from './trim.directive';

@Component({
  template: `
  <input sttTrim [(ngModel)]="model" />`
})
class TestComponent {
  model = '';
}


describe('TrimDirective', () => {

  let fixture, trimInput, component, trimInputElenent;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TrimDirective, TestComponent ]
    })
    .createComponent(TestComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    trimInput = fixture.debugElement.query(By.directive(TrimDirective));
    trimInputElenent = trimInput.nativeElement;
    fixture.detectChanges();
  });

  it('輸入"  aa  "變成"aa"', () => {
    const originValue = '  aa  ';
    const newValue = 'aa';
    trimInputElenent.value = originValue;
    trimInputElenent.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(fixture.componentInstance.model).toEqual(newValue);
  });

  it('輸入"  bb  "不能變成"aa"', () => {
    const originValue = '  bb  ';
    const newValue = 'aa';
    trimInputElenent.value = originValue;
    trimInputElenent.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(fixture.componentInstance.model).not.toEqual(newValue);
  });

  it('輸入"  bb  "變成"bb"', () => {
    const originValue = '  bb  ';
    const newValue = 'bb';
    trimInputElenent.value = originValue;
    trimInputElenent.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(fixture.componentInstance.model).toEqual(newValue);
  });

  it('輸入"aa  aa"不變', () => {
    const originValue = 'aa  aa';
    trimInputElenent.value = originValue;
    trimInputElenent.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(fixture.componentInstance.model).toEqual(originValue);
  });
});
