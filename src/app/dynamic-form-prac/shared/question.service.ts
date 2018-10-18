import { Injectable }       from '@angular/core';

import { 
  QuestionBase,
  TextboxQuestion,
  DropdownQuestion,
  RadioQuestion,
  DatepickerQuestion
}  from './index';
import { GroupQuestion } from './question-controltype';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {
    let questions: QuestionBase<any>[] = [

      new RadioQuestion({
        key: 'gender',
        label: '',
        options: [
          {key: 'man', value: '男'},
          {key: 'female', value: '女'}
        ],
        order: 2
      }),

      new TextboxQuestion({
        key: 'name',
        label: '請輸入姓名',
        value: '',
        required: true,
        order: 1
      }),

      new DatepickerQuestion({
        key: 'birthday',
        label: '請選擇生日',
        value: '',
        order: 3
      }),

      new TextboxQuestion({
        key: 'homePhone',
        label: '請輸入電話',
        value: '',
        order: 4
      }),

      new GroupQuestion({
        key: 'physicalConditions',
        label: '身體項目',
        formArray: true,
        children: [
          {
            key: 'width',
            label: '請輸入體重',
            value: '',
          },
          {
            key: 'height',
            label: '請輸入身高',
            value: '',
          },
        ],
        order: 5,
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
