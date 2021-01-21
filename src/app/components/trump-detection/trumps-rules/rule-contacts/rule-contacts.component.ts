import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rule-contacts',
  templateUrl: './rule-contacts.component.html',
  styleUrls: ['./rule-contacts.component.css']
})
export class TrumpsRulesItemContactsComponent implements OnInit {
  @Input('contacts') contacts: {
    name: string,
    tel: string,
    ice: string
  }

  public activeContact: number = null;

  constructor() { }

  ngOnInit() {
  }

}
