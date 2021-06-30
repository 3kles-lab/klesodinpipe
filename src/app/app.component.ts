import { Component, OnInit } from '@angular/core';
import { KlesOdinDatePipe } from 'kles-odin-pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'klesodinpipe';

  date = new Date();

  constructor() {

  }

  ngOnInit(): void {
  }

}
