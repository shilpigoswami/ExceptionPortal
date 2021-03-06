import { Component, OnInit } from '@angular/core';
import {TicketsService} from '../../services/tickets.service';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.css']
})
export class AssigneeComponent implements OnInit {

  constructor(private ticketService:TicketsService) {
  }

  ngOnInit() {
  }

  ticketModel;
  selectedTicketType;
  selectedViolationType;
  selectedActionType = {};
  selectedExceptionType = {};

  violationTypeDisabled : boolean = true;
  newTeamDisabled : boolean[] = [];
  newAssigneeDisabled : boolean[] = [];
  exceptionReasonDisabled : boolean[] = [];

  ticketOptions = [{name:"IMR", value:1}, {name:"AHD SR", value:2}]
  actionRequired = [{name:"Exception Required", value:1}, {name:"Assign violation to other team", value:2}]
  newAssignee = []
  exRequired = [{name:"Yes", value:1}, {name:"No", value:2}]
  //violations
  violationSR = [{name:"Response SLA", value:1}, {name:"Resolution SLA", value:2},
                      {name:"Re-opened SR", value:3}]
  violationIMR = [{name:"Resolution SLA", value:1}]
  violations = []
  //newTeam
  newTeamIMR = ["CFG","DBADMIN","SAP","SAP Access Control", "Service Desk", "DCM", "EPM Backup Admins",
                "Environment Management", "EPM Security", "Automation", "InfraSec"]
  newTeamSR = ["CFG", "DBADMIN", "SAP", "SAP Access Control", "Service Desk", "NON-EPM"]
  newTeam = []
  //Reason for exceptions
  exceptionReasonSR_RR = ["SLA missed by NON EPM team", "SLA missed by other team within EPM",
  "Tool not accessible", "Delayed notification from tool", "Project Party", "AHM", "Fire Drills",
   "Entire Team was in Training"]
  exceptionReasonSR_RO = ["User closed request by mistake. Hence, re-opened", "User re-opened request by mistake",
  "User re-opened for additional details", "Re-opened request was transferred to EPM by Non-EPM"]
  exceptionReasonIMR = ["SLA missed by other team","Tool not accessible", "Delayed notification from tool",
  "Project Party", "AHM", "Fire Drill", "Entire Team was in Training"]
  exceptionReason = []


  onSelectTicketType(){
    console.log(this.selectedTicketType);
    if(this.selectedTicketType!=null){
      this.violationTypeDisabled = false;
    }
    if(this.selectedTicketType.name == "AHD SR"){
        this.violations = this.violationSR;
        console.log(this.selectedTicketType);
    }
    else if(this.selectedTicketType.name == "IMR"){
        this.violations = this.violationIMR;
        console.log(this.selectedTicketType );
    }
  }

  onSelectViolationType(){
  this.ticketService.getTickets(this.selectedTicketType.name, this.selectedViolationType.name).subscribe(ticket => {
  this.ticketModel = (ticket as any).exceptionticket;
  for(let i=0;i<this.ticketModel.length;i++){
    this.newTeamDisabled[i]=true;
    this.newAssigneeDisabled[i]=true;
    this.exceptionReasonDisabled[i]=true;
    this.newTeam[i] = [];
    this.newAssignee[i] = [];
    this.exceptionReason[i]=[];
    this.selectedExceptionType[i] = this.exRequired[1];
    this.selectedActionType[i] = {};
  }
  });


  // for(let i=0;i<2;i++){
  //   this.newTeamDisabled[i]=true;
  // }
  //console.log(this.newTeam);
  // this.newTeam = this.newTeamSR;
  // this.exceptionReason = this.exceptionReasonSR_RO;
  }

  onSelectActionRequired(index){
    if(this.selectedActionType[index].name == "Exception Required"){
      this.newTeamDisabled[index] = true;
      this.newAssigneeDisabled[index]= true;
      this.newTeam[index] = [];
      this.newAssignee[index] = [];

      this.selectedExceptionType[index] = this.exRequired[0];
      this.exceptionReasonDisabled[index]=false;
      if(this.selectedTicketType.name == "AHD SR" &&
      this.selectedViolationType.name == "Re-opened SR"){
        this.exceptionReason[index] = this.exceptionReasonSR_RO;
      }
      else if(this.selectedTicketType.name == "IMR"){
        this.exceptionReason[index] = this.exceptionReasonIMR;
      }
      else{
        this.exceptionReason[index] = this.exceptionReasonSR_RR;
      }

    }
    else if(this.selectedActionType[index].name == "Assign violation to other team"){
      this.newTeamDisabled[index] = false;
      this.newAssigneeDisabled[index]= false;
      if(this.selectedTicketType.name == "AHD SR"){
        this.newTeam[index] = this.newTeamSR;
      }
      else{
        this.newTeam[index] = this.newTeamIMR;
      }

      this.newAssignee[index] = ["DDDDDDD"];

      this.selectedExceptionType[index] = this.exRequired[1];
      this.exceptionReasonDisabled[index]=true;
      this.exceptionReason[index] = [];
    }
    //console.log(this.newTeam);

  }

  onSelectExceptionRequired(index){
    if(this.selectedExceptionType[index].name == "Yes"){
      this.exceptionReasonDisabled[index]=false;
      if(this.selectedTicketType.name == "AHD SR" &&
      this.selectedViolationType.name == "Re-opened SR"){
        this.exceptionReason[index] = this.exceptionReasonSR_RO;
      }
      else if(this.selectedTicketType.name == "IMR"){
        this.exceptionReason[index] = this.exceptionReasonIMR;
      }
      else{
        this.exceptionReason[index] = this.exceptionReasonSR_RR;
      }


      this.newTeamDisabled[index] = true;
      this.newAssigneeDisabled[index]= true;
      this.newTeam[index] = [];
      this.newAssignee[index] = [];
      this.selectedActionType[index] = this.actionRequired[0];

    }
    else{
      this.exceptionReasonDisabled[index]=true;
      this.exceptionReason[index] = [];

      this.newTeamDisabled[index] = true;
      this.newAssigneeDisabled[index]= true;
      this.newTeam[index] = [];
      this.newAssignee[index] = [];
      this.selectedActionType[index] = {}
    }
    //console.log(this.selectedExceptionType);
  }



}
