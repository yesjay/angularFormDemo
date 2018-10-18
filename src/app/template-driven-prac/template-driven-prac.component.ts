import { Component, OnInit } from '@angular/core';

import { User, users, UpdataService } from '../reactive-form-prac/shared'

@Component({
  selector: 'app-template-driven-prac',
  templateUrl: './template-driven-prac.component.html',
  styleUrls: ['./template-driven-prac.component.css'],
  providers: [ UpdataService ],
})
export class TemplateDrivenPracComponent implements OnInit {
  model: User = new User();
  constructor(
    private updata: UpdataService,
  ) { }

  ngOnInit() {
  }

  getData(tar: number) {
    this.model = this.updata.get(tar)
  }

  clearData() {
    this.model = new User();
  }

  onSubmit() {
    this.updata.save(this.model);
  }

  getValue(event) {
    console.log('This is ngFomr: ', event);
  }

}
