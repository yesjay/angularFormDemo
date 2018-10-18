export class QuestionBase<T> {
  value: T;
  formArray: boolean;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  children: Array<any>;

  constructor(options: {
      value?: T,
      formArray?: boolean
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      children?: Array<T>
    } = {}) {
    this.value = options.value;
    this.formArray = !!options.formArray;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.children = options.children;
  }
}