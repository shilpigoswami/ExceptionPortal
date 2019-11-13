import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {

  // tryout start from Here
  private map = new Map<string, string[]>([
    ['IMR', ['Resolution SLA']],
    ['AHD SR', ['Response SLA', 'Resolution SLA', 'Re-Opened SLA']],
  ])

  TT: string;
  VT: string;

  get tts(): string[] {
    return Array.from(this.map.keys());
  }

  get vts(): string[] | undefined {
    return this.map.get(this.TT);
  }

// till
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

  selectedTicket(){
    console.log(this.selectedTicketType);
    if(this.selectedTicketType!=null){
      this.violationTypeDisabled = false;
    }
    if(this.selectedTicketType=="AHD SR"){

    }
    else if(this.selectedTicketType=="IMR"){

    }
  }



}
