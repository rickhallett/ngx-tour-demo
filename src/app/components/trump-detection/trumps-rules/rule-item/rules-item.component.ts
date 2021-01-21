import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


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

  // @Output('createNew') createNew: EventEmitter<any> = new EventEmitter();
  @Output() passUpCancelEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCreateNew($event) {
    // this.createNew.emit();
  }

  cancelEdit() {
    this.passUpCancelEvent.emit();
  }

}
