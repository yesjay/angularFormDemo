import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from '../question-base';

@Component({
  selector: 'app-question-prac',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],

})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  ngOnInit(){
  }
  
  get isValid() { return this.form.controls[this.question.key].valid; }
}
