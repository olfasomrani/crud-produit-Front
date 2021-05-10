import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ModifierListComponent } from './modifier-list/modifier-list.component';

const routes: Routes = [
  {path:'produits',component:ListProduitComponent},
  {path:'ajouter produit',component:AjouterProduitComponent},
  {path:'',redirectTo:'produits',pathMatch:'full'},

  {path:'ModifierList/:ref',component:ModifierListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
