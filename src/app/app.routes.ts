import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {CreateComponent} from './create/create.component';

export const routes: Routes = [
  {path : "" , component : AccueilComponent},
  {path : "accueil" , component : AccueilComponent},
  {path : "create" , component : CreateComponent}
];
