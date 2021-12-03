import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteServiceService } from 'src/app/Activites/Services/activite-service.service';
import { ParticipantServiceService } from '../Services/participant-service.service';
import * as XLSX from 'xlsx';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { ManyParticipant } from 'src/app/Models/ManyParticipants';

type AOA = any[][];

@Component({
  selector: 'app-ajout-participant-fichier',
  templateUrl: './ajout-participant-fichier.component.html',
  styleUrls: ['./ajout-participant-fichier.component.scss']
})
export class AjoutParticipantFichierComponent implements OnInit {
  participant:any;
  participation: any;
  id: any;
  activite: any;
  spinnerEnabled=false;
  keys!:string[];
  dataSheet= new Subject();
 @ViewChild('inputFile') inputFile!: ElementRef;
 isExcelFile!:boolean;
 participants:any[]=[];
 data:any;
 manyPart: ManyParticipant= new ManyParticipant();

  name = 'Angular';
  fileName: string = 'SheetJS.xlsx';
  datas: any;
  headData: any // excel row header

  constructor(
    private service: ParticipantServiceService,
    private serviceAct: ActiviteServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.serviceAct.detail(this.id).subscribe((data: any)=>{
      this.activite = data;
    });
  }

  /* <input type="file" (change)="onFileChange($event)" multiple="false" /> */
  /* ... (within the component class definition) ... */
  onFileChange(evt: any) {
    // let data: any, header;
    const target : DataTransfer = <DataTransfer>(evt.target);
    this.isExcelFile = !!target.files[0].name.match(/(.xls|.xlsx)/);
    if(target.files.length > 1) {
      this.inputFile.nativeElement.value= '';
    }

    if(this.isExcelFile){
      this.participants=[];
      this.spinnerEnabled = true;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) =>{
        // lire le classeur
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary'});

        // saisir la première feuille
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        // enregistrer des données

        this.datas = XLSX.utils.sheet_to_json(ws);
        console.log(this.datas);
        const ws2: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[1]];
        this.readDataSheet(ws2, 10);
      };

      reader.readAsBinaryString(target.files[0]);
      reader.onloadend = (e) => {
        this.spinnerEnabled = false;
        this.keys = Object.keys(this.datas[0]);
      }

      this.PreviewFichier(evt);
    }else{
      this.inputFile.nativeElement.value = '';
    };
  }

  PreviewFichier(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(
        XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, range: 0 })
      );
      console.log(this.data[1]);

      this.headData = this.data[0];
      this.data = this.data.slice(1); // remove first header record

      const ws2: XLSX.WorkSheet = wb.Sheets[wb.SheetNames[1]];
      this.readDataSheet(ws2, 10);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  private readDataSheet(ws: XLSX.WorkSheet, startRow: number) {
    /* save data */
    let datas = <AOA>(
      XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, range: startRow })
    );
    console.log(datas[1]);
    let headDatas = datas[0];
    datas = datas.slice(1); // remove first header record

    for (let i = 0; i < this.data.length; i++) {
      this.data[i][this.headData.length] = datas.filter(
        (x) => x[12] == this.data[i][0]
      );
    }
    console.log(this.data[1]);
  }

  // export(): void {
	// 	/* generate worksheet */
	// 	const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

	// 	/* generate workbook and add the worksheet */
	// 	const wb: XLSX.WorkBook = XLSX.utils.book_new();
	// 	XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

	// 	/* save to file */
	// 	XLSX.writeFile(wb, this.fileName);
	// }

  annuler(){
    window.location.reload();
    this.router.navigateByUrl('ajout-participant-fichier/'+ this.activite.id_activite, {skipLocationChange: true}).then(()=>
    this.router.navigate(['ajout-participant-fichier', this.activite.id_activite])); 
  }

  ajoutFichier(){
    for(let i=0; i<this.datas.length; i++){
      // console.log(this.data[i]);
      this.participants.push({
        nom_complet:this.datas[i].nom_complet,
        telephone:this.datas[i].telephone,
        domaine:this.datas[i].domaine,
        structure:this.datas[i].structure,
        email:this.datas[i].email,
        participantGenre: this.datas[i].participant_genre,
      });
    }
    console.log(this.participants);
    this.manyPart.participant=this.participants;
    console.log("plusieurs part", this.manyPart);

    this.service.ajoutParticipantExcel(this.participants).subscribe((data:any)=>{
      for(let i=0; i< data.length; i++){
        this.participation = {'activite': this.activite, 'participant': data[i]}
        this.serviceAct.AjoutParticipation(this.participation).subscribe((data:any)=>{
         // window.location.reload();
          this.router.navigateByUrl('detail-activite/'+ this.activite.id_activite, {skipLocationChange: true}).then(()=>
          this.router.navigate(['detail-activite', this.activite.id_activite])); 
        })
      }

        console.log("insert....", data)
    },
    (err=>{
      console.log("erreur...", err);
      
    })
    )
  }

}
