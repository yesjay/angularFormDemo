import { Component, OnChanges, Input } from '@angular/core';
import { ErrorMessage } from '../../service/error-message.type';

@Component({
  selector: 'stt-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnChanges {
  array: any[] = ['required', 'pattern', 'minlength', 'maxlength', 'sttCompareTo'];
  showMessage = new ErrorMessage();

  @Input()  errors: any;
  @Input()  minlength: number;
  @Input()  maxlength: number;
  @Input()  pattern: string;
  @Input()  symbol: string;

  ngOnChanges(changes: any) {
    this.array.some(key => {
      if (this.errors[key]) {
        this.showMessage = new ErrorMessage();
        this.showMessage[key] = this.errors[key];
        return true;
      }
    });
  }
}
