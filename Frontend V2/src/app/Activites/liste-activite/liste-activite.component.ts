import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiviteServiceService } from '../Services/activite-service.service';

@Component({
  selector: 'app-liste-activite',
  templateUrl: './liste-activite.component.html',
  styleUrls: ['./liste-activite.component.scss']
})
export class ListeActiviteComponent implements OnInit {
  listes:any;
  searchText= '';
  
  constructor(
    private service : ActiviteServiceService,
    private router : Router

  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAllList().subscribe((data:any)=> {
      this.listes = data;
      console.log(data);
    })
  }

  deleteActivivite(data: any){
    this.service.delete(data).subscribe((res: any)=>{
      window.location.reload();
      this.router.navigateByUrl('/liste-activite', {skipLocationChange: true}).then(()=>
      this.router.navigate(['liste-activite'])); 
    })
  }

  getExercice(date:any) {
    this.service.exercice(date.year).subscribe((data)=> {
      this.listes = data;
      console.log(data);
    })
  }

  getMonth(date:any) {
    this.service.Month(date.mois).subscribe((data)=> {
      this.listes = data;
      console.log(data);
    })
  }

}
