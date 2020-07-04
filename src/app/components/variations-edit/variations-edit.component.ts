import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-variations-edit',
  templateUrl: './variations-edit.component.html',
  styleUrls: ['./variations-edit.component.css']
})

export class VariationsEditComponent implements OnInit {
  show = {
    retweet: true,
    read: true,
    
  
  }
  value = 'Probability %';
  value2 = 'X value';
  value3 = 'Period';
  
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any){}
  
    ngOnInit(): void {
    }
  
  }
  

