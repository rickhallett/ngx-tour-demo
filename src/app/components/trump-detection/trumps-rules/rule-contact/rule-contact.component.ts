import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../trumps-rules.component';

@Component({
  selector: 'rule-contact',
  templateUrl: './rule-contact.component.html',
  styleUrls: ['./rule-contact.component.css']
})
export class TrumpsRulesItemContactsItemComponent implements OnInit {
  @Input('contact') contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
