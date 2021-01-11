import { Component, OnInit } from '@angular/core';
import { RepositionPopupService } from '../reposition-popup.service';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css']
})
export class NgxDocsComponent implements OnInit {

  constructor(private repositionPopupService: RepositionPopupService) {

  }

  ngOnInit() {
    console.log('/docs repositionPopupService:', this.repositionPopupService);
  }

}
