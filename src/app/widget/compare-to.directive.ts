import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[sttCompareTo][formControlName],[sttCompareTo][formControl],[sttCompareTo][ngModel]',
    providers: [{
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CompareToDirective),
      multi: true
    }]
})
export class CompareToDirective implements Validator {
    constructor(
      @Attribute('sttCompareTo') public sttCompareTo: string,
      @Attribute('reverse') public reverse: string
    ) {}

    private get isReverse() {
        return (this.reverse && this.reverse === 'true') ? true : false;
    }

    validate(element: AbstractControl): { [key: string]: any } {
        const myValue = element.value;
        const compareElement = element.root.get(this.sttCompareTo);

        // value not equal or value equal but compareElement invalid
        if (compareElement
          && !this.isReverse
          && (myValue !== compareElement.value
            || (!compareElement.valid
              && myValue === compareElement.value))) {
            return {
                sttCompareTo: true
            };
        }

        // value equal and reverse
        if (compareElement
          && myValue === compareElement.value
          && this.isReverse) {
            delete compareElement.errors['sttCompareTo'];
            if (!Object.keys(compareElement.errors).length) {
              compareElement.setErrors(null);
            }
        }

        // value not equal and reverse
        if (compareElement
          && myValue !== compareElement.value
          && this.isReverse) {
            compareElement.setErrors({ sttCompareTo: true });
        }

        return null;
    }
}
