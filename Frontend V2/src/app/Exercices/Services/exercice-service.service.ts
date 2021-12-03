import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciceServiceService {
  url = environment.URL;
  constructor(
    private http: HttpClient,
  ) { }

    //declaration de la fonction listeExercice pour recuperer la liste dans la base des données
    listeExercice(){
      return this.http.get(this.url+'/listeExercice');
    }

    //Declaration de la fonction ajoutExercice pour envoyer les données dans la base des données
    ajoutExercice(data: any){
      return this.http.post(this.url+'/ajoutExercice', data);
    }

    detailExercice(id:any){
      return this.http.get(this.url+`/ExerciceById/${id}`);
    }

    updateExercice(id:any, data: any){
      return this.http.put(this.url+`/updateExercice/${id}`, data);
    }

    deleteExercice(id:any){
      return this.http.delete(this.url+`/supprimerExercice/${id}`);
    }

    //activités par exercice
    public ExerciceParActivite(annee:any) {
      return this.http.get(this.url+"/activiteByAnnee="+ annee);
    }

    //recherche par exercice
    public RechercheExercice(annee:any) {
      return this.http.get(this.url+"/ExerciceByYear="+ annee);
    }


}
