export class ErrorMessage {
  required: Boolean;
  email: any;
  pattern: any;
  minlength: any;
  maxlength: any;
  sttCompareTo: Boolean;
  constructor({
    required = false,
    email = false,
    pattern = null,
    minlength = null,
    maxlength = null,
    sttCompareTo = false,
  } = {}) {
    this.required = required;
    this.email = email;
    this.pattern = pattern;
    this.minlength = minlength;
    this.maxlength = maxlength;
    this.sttCompareTo = sttCompareTo;
  }
}
