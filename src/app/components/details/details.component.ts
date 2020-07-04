import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { AgentEditComponent } from '../agent-edit/agent-edit.component';
import { VariationsEditComponent } from '../variations-edit/variations-edit.component';
import { RulesEditComponent } from '../rules-edit/rules-edit.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

  constructor(public rulesDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRules() {
    const dialog = this.rulesDialog.open(RulesEditComponent, {
      width: "800px",
      data:'',
      /*disableClose: true*/
  });
  

  }


  openAgent() {
    const dialog = this.rulesDialog.open(AgentEditComponent, {
      width: "800px",
      data:'',
      /*disableClose: true*/
  });
  
  }

  openVariations() {
    const dialog = this.rulesDialog.open(VariationsEditComponent, {
      width: "800px",
      data:'',
      /*disableClose: true*/
  });
  
  }
}
