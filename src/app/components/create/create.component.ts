import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgentsComponent } from '../forms/agents/agents.component';
import { AgentComponent } from '../agent/agent/agent.component';
import { VariationsComponent } from '../variations/variations/variations.component'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {

  constructor(public rulesDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRules() {
    const dialog = this.rulesDialog.open(AgentsComponent, {
      width: "800px",
      data:'',
      /*disableClose: true*/
  });
  

  }
  openAgent() {
    const dialog = this.rulesDialog.open(AgentComponent, {
      width: "800px",
      data:'',
      /*disableClose: true*/
  });
  
  }

  openVariations() {
    const dialog = this.rulesDialog.open(VariationsComponent, {
      width: "800px",
      data:'',
      /*disableClose: true*/
  });
  
  }

}
