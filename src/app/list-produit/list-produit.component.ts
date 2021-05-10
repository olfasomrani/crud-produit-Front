import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import {  ProduitService } from '../produit.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  produits:Produit[];

  constructor(private ps: ProduitService , private router:Router ) { }

  ngOnInit(): void {
    this.AfficherProduit();}

    private AfficherProduit () {
      this.ps.AfficherProduit().subscribe(data =>{
        this.produits=data

      });
      
    }
    SupprimerProduit(ref:number) {
      this.ps.SupprimerProduit(ref).subscribe(data =>{
        console.log(data);
        this.AfficherProduit();
      });
    
    }
    ModifierProduit(ref:number){
      this.router.navigate(['ModifierList',ref])


    }
        

      
    
   
  }

