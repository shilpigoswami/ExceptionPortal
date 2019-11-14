import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedTicketType : string;
  selectedViolationType : string;
  violationTypeDisabled : boolean = true;

  ticketOptions = [{name:"IMR", value:1}, {name:"AHD SR", value:2}]
  violationSR = [{name:"Response SLA", value:1}, {name:"Resolution SLA", value:2},
                      {name:"Re-opened SR", value:2}]
  violationIMR = [{name:"Resolution SLA", value:1}]
  violations = []

  selectedTicket(){
    console.log(this.selectedTicketType);
    if(this.selectedTicketType!=null){
      this.violationTypeDisabled = false;
    }
    if(this.selectedTicketType.name =="AHD SR"){
        this.violations = this.violationSR;
        console.log(this.selectedTicketType);
    }
    else if(this.selectedTicketType.name =="IMR"){
        this.violations = this.violationIMR;
        console.log(this.selectedTicketType );
    }
  }



}
