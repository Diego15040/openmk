import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-variations',
  templateUrl: './variations.component.html',
  styleUrls: ['./variations.component.css']
})
export class VariationsComponent implements OnInit {
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
  
