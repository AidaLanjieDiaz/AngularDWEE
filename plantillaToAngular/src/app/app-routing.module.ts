import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from '../../../proyecto/src/app/components/about/about.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [
  {
    path: 'home',
    component: PortafolioComponent,
    pathMatch: 'full'
    },
    {
    path: 'about',
    component: AboutComponent
    },
    {
    path: 'item',
    component: ItemsComponent
    },
    {
      path: 'item/:id',
      component: ItemsComponent
      },
    {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
