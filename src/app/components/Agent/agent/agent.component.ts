import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  show = {
    retweet: true,
    read: true
  
  }
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any){}
  
    ngOnInit(): void {
    }
}
