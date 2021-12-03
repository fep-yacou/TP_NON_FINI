import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciceServiceService } from '../Services/exercice-service.service';

@Component({
  selector: 'app-liste-exercice',
  templateUrl: './liste-exercice.component.html',
  styleUrls: ['./liste-exercice.component.scss']
})
export class ListeExerciceComponent implements OnInit {
  listeExo : any;
  searchText= '';
  constructor(
    private service: ExerciceServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
      //lancer directement la fonction listeExercices a l'ouverture de la page
      this.listeExercices();
  }
  // Recuperation des données qui se trouve dans la fonction listeExercice par la fonction listeExercices et l'affecter a listeExo
  listeExercices(){
    this.service.listeExercice().subscribe((data:any)=>{
      this.listeExo = data;
    })
  }

  deleteExercice(data: any){
    this.service.deleteExercice(data).subscribe((datas: any)=>{
      window.location.reload();
      this.router.navigateByUrl('/liste-exercice', {skipLocationChange: true}).then(()=>
      this.router.navigate(['liste-exercice'])); 

    })

  }

}
