import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = (question.formArray) ? this.getFormGroup(question) : this.getFormControl(question);
    });
    return new FormGroup(group);
  }

  private getFormControl(targetQuestion: QuestionBase<any>) {
    return targetQuestion.required ? new FormControl(targetQuestion.value || '', Validators.required)
    : new FormControl(targetQuestion.value || '');
  }

  private getFormGroup(targetQuestion: QuestionBase<any>) {
    let optionsFormControl: any = {};
    targetQuestion.children.forEach(question => {
      optionsFormControl[question.key] = this.getFormControl(question);
    })
    return new FormGroup(optionsFormControl);
  }
}