import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiviteServiceService {

  url= environment.URL;

  constructor(
    private http: HttpClient,
  ) { }

  public getAllList(){
    return this.http.get(this.url+"/activites")
  }

  public Ajout(Data:any) {
    return this.http.post(this.url+"/saveActivite", Data);
  }

  public delete(id_activite:any) {
    return this.http.delete(this.url+"/supprimerActivite/"+id_activite);
  }

  public update(id: any, activite: any) {
    return this.http.put(this.url+`/updateActivite/${id}`, activite);
  }

  detail(id_activite:any){
    return this.http.get(this.url+"/ActiviteById/"+id_activite)
  }

  //Gestion de Log
  public AjoutLog(data:any) {
    return this.http.post(this.url+"/addlog", data);
  }

  //Gestion de participation
  public AjoutParticipation(data:any) {
    return this.http.post(this.url+"/ajouteParticipation", data);
  }

   //Participant par activite
   public ParticipantParActivite(id_activite:any) {
    return this.http.get(this.url+"/getParticipantActivite/"+ id_activite);
  }

  //Responsable par activite
  public ResponsableParActivite(id_activite: any) {
    return this.http.get(this.url+"/findLogActivite/"+ id_activite);
  }

  exercice(year:any){
    return this.http.get(this.url+"/activiteByAnnee="+year)
  }

  Month(mois:any){
    return this.http.get(this.url+"/actviteByMonth/"+mois)
  }

 

}
