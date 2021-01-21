import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as faker from 'faker';

export type Contact = {
  name: string,
  tel: string,
  ice: string
  edit: boolean
}

export const newContact = () => {
  return {
    name: `${faker.name.title()}. ${faker.name.firstName()} ${faker.name.lastName()}`,
    tel: faker.phone.phoneNumber().toString(),
    ice: faker.hacker.phrase(),
    edit: false
  }
}

const newContacts = () => [
  newContact(), newContact(), newContact()
]

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
    { rule: 'No twitter', edit: false, contacts: newContacts() },
    { rule: 'No office', edit: false, contacts: newContacts() },
    { rule: 'No facebook', edit: false, contacts: newContacts() },
    { rule: 'No friends', edit: false, contacts: newContacts() },
  ]

  public activeIndex: number = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('after view init')
  }

  onNewRule() {
    this.rules.push({ rule: 'New rule', edit: false,  contacts: newContacts() } );
  }

  onSave() {
  }

  onCancel() {
    this.rules.map(r => r.edit = false);
  }

  onSubmit() {
  }

}
