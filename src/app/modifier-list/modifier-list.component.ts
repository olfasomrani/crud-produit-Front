import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-modifier-list',
  templateUrl: './modifier-list.component.html',
  styleUrls: ['./modifier-list.component.css']
})
export class ModifierListComponent implements OnInit {
  ref:number;
  produit: Produit=new Produit();

  constructor(private ps:ProduitService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() : void {
    this.ref = this.route.snapshot.params['ref'];
    this.ps.getProduitByRef(this.ref).subscribe(data=>{
      this.produit =data;},
      error=>console.log(error));
  }
  
  onSubmit(){
    this.ps.ModifierProduit(this.ref, this.produit).subscribe( data =>{
      this.goToProduitList();
    }
    , error => console.log(error));
  }

  goToProduitList(){
    this.router.navigate(['/produits']);
  }
}


