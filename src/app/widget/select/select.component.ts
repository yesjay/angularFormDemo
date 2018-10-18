import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/combineLatest';

import { SelectItem } from 'src/app/shared';

@Component({
  selector: 'stt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() placeholder = '';
  @Input() allowClear = false;
  @Input() require = false;
  @Input() disabled = false;
  @Input() multiple = false;

  @Input() labelField = 'label';
  @Input() valueField = 'value';
  @Input() displayField = 'label';
  @Input() translatePrefix = '';

  @Input()
  set dataList(value: Array<any>) {
    if (value) {
      this.dataType = typeof value[0];
      this._dataList.next(value);
    }
  }
  get dataList() {
    return this._dataList.getValue();
  }
  @Input()
  set data(value: any) {
    if (value) {
      value = Array.isArray(value) ? value : [...[value]];
      this._data.next(value);
    }
  }
  get data() {
    return this._data.getValue();
  }
  @Output() dataChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('inputField') inputField: ElementRef;

  private _dataList = new BehaviorSubject([]);
  private _data = new BehaviorSubject([]);
  private dataType;
  selectedList: Array<any> = [];
  selectOptions: Array<any> = [];
  showSelectOptions = false;

  constructor() { }

  ngOnInit() {
    this._dataList
      .combineLatest(this._data, (dataList: Array<any>, data: Array<any>) => ({dataList, data}))
      .subscribe(res => {
        const dataList = this.data2SelectItem(res.dataList),
          data = this.data2SelectItem(res.data);
        if (this.multiple) {
          this.selectedList = dataList.filter((list: SelectItem) => data.filter((item: SelectItem) => JSON.stringify(list).indexOf(JSON.stringify(item)) > -1).length > 0);
          this.selectOptions = dataList.filter((list: SelectItem) => JSON.stringify(this.selectedList).indexOf(JSON.stringify(list)) === -1);
        } else {
          this.selectedList = dataList.filter((list: SelectItem) => JSON.stringify(list).indexOf(JSON.stringify(data[0])) > -1);
          this.selectOptions = dataList.filter((list: SelectItem) => list);
        }
      });
  }

  data2SelectItem(dataList: Array<any>) {
    return dataList.filter((list: any) => {
      return typeof list === 'string'
        || typeof list === 'number'
        || typeof list === 'boolean'
        || (typeof list === 'object' && list && list[this.valueField] && list[this.labelField]);
    }).map(list => {
      return (typeof list === 'string' || typeof list === 'number' || typeof list === 'boolean')
        ? new SelectItem(list)
        : new SelectItem({
            label: list[this.labelField],
            value: list[this.valueField]
          });
    });
  }

  selectItem2Data(dataType: string, selectedList: Array<SelectItem>) {
    const selectedArray = selectedList.map((list: SelectItem) => list.value);
    return (dataType === 'string' || dataType === 'number' || dataType === 'boolean')
      ? selectedArray
      : this.dataList.filter((list: any) => selectedArray.indexOf(list[this.valueField]) > -1);
  }

  inputEvent(event: any) {
    // Esc
    if (event.keyCode === 27) {
      this.showSelectOptions = false;
    } else if (event.target.value || this.showSelectOptions) {
      this.showSelectOptions = true;
      this.selectOptions = this.data2SelectItem(this.dataList).filter((list: SelectItem) => {
        return JSON.stringify(this.selectedList).indexOf(JSON.stringify(list)) === -1 && list[this.displayField].indexOf(event.target.value) > -1;
      });
    }
  }

  clickEvent(event: any) {
    this.showSelectOptions = true;
  }

  clickOutsideEvent(event: any) {
    this.showSelectOptions = false;
  }

  isSelected(option: SelectItem) {
    return this.selectedList.length && JSON.stringify(this.selectedList).indexOf(JSON.stringify(option)) > -1;
  }

  onSelect(option: SelectItem) {
    if (this.multiple) {
      this.selectedList.push(option);
      this.dataChange.emit(this.selectItem2Data(this.dataType, this.selectedList));
    } else {
      this.selectedList[0] = option;
      this.dataChange.emit(this.selectItem2Data(this.dataType, this.selectedList)[0]);
    }
    if (this.inputField) {
      this.inputField.nativeElement.value = '';
    }
  }

  removeSelect(index?: number) {
    if (this.multiple) {
      this.selectedList.splice(index, 1);
      this.dataChange.emit(this.selectItem2Data(this.dataType, this.selectedList));
    } else {
      this.selectedList = [];
      this.dataChange.emit(null);
    }
  }

}
