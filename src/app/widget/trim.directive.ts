import { Directive, HostListener, forwardRef } from '@angular/core';
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * The trim accessor for writing trimmed value and listening to changes that is
 * used by the {@link NgModel}, {@link FormControlDirective}, and
 * {@link FormControlName} directives.
 */
@Directive({
  selector: '[sttTrim]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TrimDirective),
    multi: true
  }]
})
export class TrimDirective extends DefaultValueAccessor {

  @HostListener('input', ['$event.target.value'])
  @HostListener('blur', ['$event.target.value'])
  ngOnChange = (val: string) => {
    this.onChange(val.trim());
  }

  writeValue(value: any) {
    if (typeof value === 'string') {
      value = value.trim();
    }
    super.writeValue(value);
  }

}
