import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteServiceService } from '../Services/activite-service.service';

@Component({
  selector: 'app-modifier-activite',
  templateUrl: './modifier-activite.component.html',
  styleUrls: ['./modifier-activite.component.scss']
})
export class ModifierActiviteComponent implements OnInit {
  id: any;
  activite: any;

   constructor(
    private service: ActiviteServiceService, 
    private activatedRoute: ActivatedRoute,
    private route : Router
   ) { }

   ngOnInit(): void {
     this.id = this.activatedRoute.snapshot.params['id'];
      this.service.detail(this.id).subscribe((data: any)=>{
        this.activite = data;
        console.log(this.activite);
      })
   }

  updateActivite(){
    this.service.update(this.id, this.activite).subscribe((res)=> {
      console.log(res);
      this.route.navigateByUrl('/liste-activite');
    })

  }
  
}
