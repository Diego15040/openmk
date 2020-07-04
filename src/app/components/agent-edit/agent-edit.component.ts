import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agent-edit',
  templateUrl: './agent-edit.component.html',
  styleUrls: ['./agent-edit.component.css']
})
export class AgentEditComponent implements OnInit {
  show = {
    retweet: true,
    read: true
  
  }
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any){}
  
    ngOnInit(): void {
    }
}
