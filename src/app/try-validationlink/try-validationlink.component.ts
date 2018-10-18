import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/forbidden-name.directive'

@Component({
  selector: 'app-try-validationlink',
  templateUrl: './try-validationlink.component.html',
  styleUrls: ['./try-validationlink.component.css']
})
export class TryValidationlinkComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
  dataForm: FormGroup;
  test;

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.getDateForm(this.hero);
  }

  get name() { return this.dataForm.get('name'); }

  get power() { return this.dataForm.get('power'); }

  getDateForm(data) {
    this.dataForm = new FormGroup({
      'name': new FormControl(data.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo': new FormControl(data.alterEgo),
      'power': new FormControl(data.power, Validators.required)
    });
  }

  newHero() {
    this.hero = {name: '', alterEgo: '', power: ''};
    this.getDateForm(this.hero);
  }

}
