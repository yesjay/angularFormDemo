import { Component, OnInit } from '@angular/core';

import { FormData } from './shared'

@Component({
  selector: 'app-form-group-test',
  templateUrl: './form-group-test.component.html',
  styleUrls: ['./form-group-test.component.css'],
})
export class FormGroupTestComponent implements OnInit {
  testData: FormData;
  inputData = {
    id: 42, 
    name: 'SkyDog',
    power: 'Fetch any object at any distance',
    alterEgo: 'Leslie Rollover'
  }

  changeData = {
    id: 43, 
    name: 'gfDog',
    power: 'shoot dark',
    alterEgo: '?'
  }

  powers = [
    'man power',
    'too smart',
    'speed',
    'modify everything',
    'cant dead',
    'shoot dark',
    'Fetch any object at any distance',
  ]

  submitted = false;

  constructor(
  ) {}

  ngOnInit() {
    this.testData = new FormData(this.inputData);
  }

  newHero() {
    this.testData = new FormData(this.changeData);
  }

  onSubmit() { 
    this.submitted = true;
  }
}
