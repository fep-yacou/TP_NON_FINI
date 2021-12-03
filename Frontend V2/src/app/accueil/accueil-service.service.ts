import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {

  url = environment.URL;
  constructor(
    private http : HttpClient,
  ) { }

  public getHomme(){
    return this.http.get(this.url+'/participantGenre=Homme');
  }
  public getFemme(){
    return this.http.get(this.url+'/participantGenre=Femme');
  }
}
