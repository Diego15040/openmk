import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
show = {
  retweet: true,
  read: true

}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
  }

}
