import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rule-contacts',
  templateUrl: './rule-contacts.component.html',
  styleUrls: ['./rule-contacts.component.css']
})
export class RuleContactsComponent implements OnInit {
  @Input('contacts') contacts: {
    name: string,
    tel: string,
    ice: string
  }

  @Output() createNew: EventEmitter<any> = new EventEmitter();
  @Output() cancelEdit: EventEmitter<any> = new EventEmitter();

  public activeContact: number = null;

  constructor() { }

  ngOnInit() {
  }

  newContact() {
    this.createNew.emit();
  }

  onClose() {
    this.activeContact = null;
  }

  onCancel() {
    this.cancelEdit.emit();
  }

}
