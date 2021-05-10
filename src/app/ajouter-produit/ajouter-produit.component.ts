import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import {  ProduitService } from '../produit.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  produit:Produit=new Produit();

  constructor(private ps:ProduitService,private routeur:Router) { }

  ngOnInit(): void {

    
  }
  AjouterProduit(){
    this.ps.AjouterProduit(this.produit).subscribe(data=>{
     console.log(data);
     this.goToListProduit();


    },
    error=>console.log(error));
   
  }
  goToListProduit(){
    this.routeur.navigate(["/produits"]);

  }
  onSubmit(){
    console.log(this.produit);
    this.AjouterProduit();
  }
  

}
