import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './shared/question-base';
import { QuestionControlService }    from './shared/question-control.service';

@Component({
  selector: 'app-dynamic-form-prac',
  templateUrl: './dynamic-form-prac.component.html',
  styleUrls: ['./dynamic-form-prac.component.css'],
  providers: [ QuestionControlService ],
})
export class DynamicFormPracComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
