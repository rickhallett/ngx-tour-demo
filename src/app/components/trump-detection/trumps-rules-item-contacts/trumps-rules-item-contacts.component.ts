import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trumps-rules-item-contacts',
  templateUrl: './trumps-rules-item-contacts.component.html',
  styleUrls: ['./trumps-rules-item-contacts.component.css']
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
