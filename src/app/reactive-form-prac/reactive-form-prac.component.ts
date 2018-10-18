import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { users, User, UpdataService } from './shared';
import { forbiddenNameValidator } from '../try-validationlink/shared/forbidden-name.directive'

@Component({
  selector: 'app-reactive-form-prac',
  templateUrl: './reactive-form-prac.component.html',
  styleUrls: ['./reactive-form-prac.component.css'],
  providers: [ UpdataService ],
})
export class ReactiveFormPracComponent implements OnInit, OnChanges {

  dataForm: FormGroup;
  selectUser: User;
  localList = [
    '基隆', '台北', '新北', '宜蘭'
  ]

  local;

  constructor(
    private formBuilder: FormBuilder,
    private updata: UpdataService,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }
  
  ngAfterViewChecked() {
    console.log(this.local);
  }

  buildForm() {
    this.dataForm =  this.formBuilder.group({
      name: ['', [Validators.required, forbiddenNameValidator(/bob/i)] ],
      gender: '',
      birthday: '',
      local: '',
      homePhone: '',
      physicalConditions: this.formBuilder.group({ // <-- the child FormGroup
        weight: null,
        height: null,
      }),
    })
  }

  getData(tar: number) {
    this.updata.getUser(tar).subscribe(
      user => {
        this.selectUser = user;
        this.dataForm.reset(user);
      }
    );
  }

  clearData() {
    this.dataForm.reset(new User());
  }

  onSubmit() {
    Object.keys(this.dataForm.value).forEach(prop => {
      this.selectUser[prop] = this.dataForm.value[prop];
    })
    this.updata.save(this.selectUser);
  }

  getValue(event) {
    console.log('This is formGroup: ', event);
  }
}
