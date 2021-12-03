import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {
  url= environment.URL;
  constructor(
    private http: HttpClient,
  ) { }
  
  //liste Participant
  listeparticipant(){
    return this.http.get(this.url + '/participants');
  }

  //ajout Participant
  ajoutParticipant(app:any){
    return this.http.post(this.url + '/participant', app);
  }

  //Modifier Participant
   updateParticipant(id: any, part:any){
    return this.http.put(this.url + `/participant/${id}`, part);
  }

  //Details Participant
  detailParticipant(id_participant:any){
    return this.http.get(this.url + `/participantById/${id_participant}`);
  }

  //Supprimer Participant
  deleteParticipant(id: any){
    console.log("delete service");
    return this.http.delete(this.url + "/deleteParticipant/"+id)
  }

  //ajout Participant
  ajoutParticipantExcel(data: any){
    return this.http.post(this.url + '/many/participant/save', data);
  }
}
