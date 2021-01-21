import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../trumps-rules/trumps-rules.component';

@Component({
  selector: 'app-trumps-rules-item-contacts-item',
  templateUrl: './trumps-rules-item-contacts-item.component.html',
  styleUrls: ['./trumps-rules-item-contacts-item.component.css']
})
export class TrumpsRulesItemContactsItemComponent implements OnInit {
  @Input('contact') contact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
