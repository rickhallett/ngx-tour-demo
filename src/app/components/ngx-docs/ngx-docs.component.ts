import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RepositionPopupService } from '../../services/reposition-popup.service';

@Component({
  selector: 'app-ngx-docs',
  templateUrl: './ngx-docs.component.html',
  styleUrls: ['./ngx-docs.component.css']
})
export class NgxDocsComponent implements OnInit, AfterViewInit {

  constructor(private repositionPopupService: RepositionPopupService) {

  }

  ngOnInit(): void {
    console.log('/docs repositionPopupService:', this.repositionPopupService);
  }

  ngAfterViewInit(): void {
    console.log('/docs ngAfterViewInit');
  }

}
