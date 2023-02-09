import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
// con el routerlink veo el id que me han pasado y asi muestro los datos correspondientes, como el de empleados

  private _verPais: any = {}; 

  public get verPais(): any {
    return this._verPais;
  }
  public set verPais(value: any) {
    this._verPais = value;
  }

  hayError: boolean = false;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
   ) {
     this.activatedRoute.params.subscribe ((params): void => {
      /* console.log (params['id']); */ 
      this.hayError = false;

       this._verPais = this.paisService.getPaisPorAlpha(params['id'])
       .subscribe({
       next: (resp) => {
       this._verPais = resp;
       },
       error: (err) => { this.hayError = true; this._verPais = [];
       console.log("ERROR" + err); }
       });
       
     });
   }

   ngOnInit(): void {
  }


}
