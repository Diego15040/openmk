import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rules-edit',
  templateUrl: './rules-edit.component.html',
  styleUrls: ['./rules-edit.component.css']
})
export class RulesEditComponent implements OnInit {
  show = {
    retweet: true,
    read: false
  
  }
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any){}
  
    ngOnInit(): void {
    }
  
  }