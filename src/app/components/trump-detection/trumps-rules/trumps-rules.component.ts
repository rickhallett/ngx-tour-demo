import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { stubFalse } from 'lodash';

@Component({
  selector: 'app-trumps-rules',
  templateUrl: './trumps-rules.component.html',
  styleUrls: ['./trumps-rules.component.css']
})
export class TrumpsRulesComponent implements OnInit, AfterViewInit {
  public form: FormGroup = new FormGroup({
    a: new FormControl(),
    b: new FormControl()
  });

  public rules = [
    { rule: 'No twitter', edit: false },
    { rule: 'No office', edit: false },
    { rule: 'No facebook', edit: stubFalse },
    { rule: 'No friends', edit: false },
  ]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('after view init')
  }

  onNewRule() {
  }

  onSave() {
  }

  onCancel() {
  }

  onSubmit() {
  }

}
