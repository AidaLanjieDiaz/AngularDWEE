import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const ROUTES: Routes = [
  {
    //es el primer componente, cuando ponemos la URL del proyecto y nada más
    path: 'porPais',
    component: PorPaisComponent,
    pathMatch: 'full'
    },
    {
    path: 'porRegion',//cuando entre en /region
    component: PorRegionComponent
    },
    {
    path: 'porCapital',//cuando entre en /capital
    component: PorCapitalComponent
    },
    {
    path: 'verPais/:id',//cuando entre un /pais/id del pais que será dinámico
    component: VerPaisComponent
    },
    {
      path: '',//se coloca al final, si no es ninguna de las anteriores se viene a esta. También podría usar una 404Component
      redirectTo: 'porPais',
      pathMatch: 'full'
    },
    {
    path: '**',
    redirectTo: 'porPais',
    pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot( ROUTES )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
