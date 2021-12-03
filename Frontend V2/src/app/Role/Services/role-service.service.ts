import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  url = environment.URL;
  constructor(
    private http: HttpClient,
  ) { }

  listeRole(){
    return this.http.get(this.url+'/role/all');
  }

  ajoutRole(data: any){
    return this.http.post(this.url+'/role/add', data);
  }

  modifierRole(id: any, data: any){
    return this.http.put(this.url + '/role/update/'+ id, data);
  }

  detailRole(id: any){
    return this.http.get(this.url + '/role/detail/'+ id);
  }

  deleteRole(id: any){
    return this.http.delete(this.url + '/role/delete/'+ id);
  }

}
