import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceAdminService {
  url= environment.URL;
  constructor(
    private http: HttpClient,
  ) { }

  listeAdmin(){
    return this.http.get(this.url+'/listAdmin');
  }

  ajoutAdmin(data: any){
    return this.http.post(this.url+'/saveAdmin', data);
  }

  detailAdmin(id: any){
    return this.http.get(this.url+`/adminById/${id}`);
  }

  updateAdmin(id: any, data: any){
    return this.http.put(this.url+`/updateAdmin/${id}`, data);
  }

  deleteAdmin(id: any){
    return this.http.delete(this.url+`/deleteAdmin/${id}`);
  }
 
}
