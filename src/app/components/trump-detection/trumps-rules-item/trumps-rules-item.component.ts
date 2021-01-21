import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trumps-rules-item',
  templateUrl: './trumps-rules-item.component.html',
  styleUrls: ['./trumps-rules-item.component.css']
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
