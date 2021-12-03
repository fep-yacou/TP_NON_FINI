import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ResponsableServiceService {
  url = environment.URL;
  constructor(
    private http: HttpClient,
  ) { }

  listeResponsable(){
    return this.http.get(this.url+'/responsables');
  }

  ajoutResponsale(data:any){
    return this.http.post(this.url+'/saveResponsable', data)
  }

  modifierResponsable(id:any, data: any){
    return this.http.put(this.url+'/updateResponsable/'+id, data);
  }

  detailResponsable(id:any){
    return this.http.get(this.url+'/responsable/'+id);
  }

  deleteResponsable(id:any){
    return this.http.delete(this.url+'/deleteResponsable/'+id);
  }
}
