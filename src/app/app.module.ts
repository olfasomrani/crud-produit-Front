import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import {FormsModule} from '@angular/forms';
import { ModifierListComponent } from './modifier-list/modifier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProduitComponent,
    AjouterProduitComponent,
    ModifierListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
