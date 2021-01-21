import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rules-item',
  templateUrl: './rules-item.component.html',
  styleUrls: ['./rules-item.component.css']
})
export class TrumpsRulesItemComponent implements OnInit {
  @Input('item') item: { rule: string, edit: boolean, contacts: [{
    name: string,
    tel: string,
    ice: string
  }] };

  constructor() { }

  ngOnInit() {
  }

}