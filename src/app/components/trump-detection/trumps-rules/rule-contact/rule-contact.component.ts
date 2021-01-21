import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../trumps-rules.component';

@Component({
  selector: 'rule-contact',
  templateUrl: './rule-contact.component.html',
  styleUrls: ['./rule-contact.component.css']
})
export class RuleContactComponent implements OnInit {
  @Input('contact') contact: Contact;
  @Output('close') close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeEditContact() {
    this.close.emit('close-contact-edit');
  }

}
