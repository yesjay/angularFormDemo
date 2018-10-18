import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { QuestionService } from './dynamic-form-prac/shared/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ QuestionService ]
})
export class AppComponent implements OnInit {
  langs = ['zh-TW', 'en-US'];
  questions: any[];

  constructor(
    private service: QuestionService,
    public translateService: TranslateService,
  ) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
    this.translateService.addLangs(this.langs);
    this.translateService.setDefaultLang('zh-TW');
  }
}
