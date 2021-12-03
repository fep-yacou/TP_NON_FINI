import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciceServiceService } from '../Services/exercice-service.service';

@Component({
  selector: 'app-detail-exercice',
  templateUrl: './detail-exercice.component.html',
  styleUrls: ['./detail-exercice.component.scss']
})
export class DetailExerciceComponent implements OnInit {
  id: any;
  exo: any
  exerciceActivite: any;
  constructor(
    private service: ExerciceServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailExercice(this.id).subscribe((data: any)=>{
    this.exo = data;
    this.service.ExerciceParActivite(this.exo.annee).subscribe((datas: any)=>{
      this.exerciceActivite = datas;
    })
   
    });
    
    
  }

}
