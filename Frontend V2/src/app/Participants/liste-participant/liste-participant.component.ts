import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantServiceService } from '../Services/participant-service.service';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Message } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.scss']
})
export class ListeParticipantComponent implements OnInit {
  msgs: Message[] = [];
  position!: string;
  listpart: any;
  id: any;
  participant:any;
  searchText=''; 
  messageService: any;
  
  constructor(
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private service : ParticipantServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.listepart();
  }
  
  
  async listepart(){
    this.service.listeparticipant().subscribe((res:any) =>{
      this.listpart = res;      
    })
  }

  delete(data: any){
    this.service.deleteParticipant(data).subscribe((datas: any)=>{
      window.location.reload();
      this.router.navigateByUrl('/liste-participant', {skipLocationChange: true}).then(()=>
      this.router.navigate(['liste-participant'])); 
    })
   
  }
  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
}
confirm2() {
  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
      },
      reject: (type: any) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
  });
}
confirmPosition(position: string) {
  this.position = position;

  this.confirmationService.confirm({
    message: 'Do you want to delete this record?',
    header: 'Delete Confirmation',
    icon: 'pi pi-info-circle',
    accept: () => {
      this.msgs = [
        { severity: 'info', summary: 'Confirmed', detail: 'Record deleted' },
      ];
    },
    reject: () => {
      this.msgs = [
        {
          severity: 'info',
          summary: 'Rejected',
          detail: 'You have rejected',
        },
      ];
    },
    key: 'positionDialog',
  });
}
}
