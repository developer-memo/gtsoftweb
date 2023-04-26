import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gtsoftweb';

  constructor(private wowService: NgwWowService){}

  ngOnInit(): void {
    this.wowService.init();
    
  }
}
