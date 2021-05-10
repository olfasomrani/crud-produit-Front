import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private baseUrl="http://localhost:8080/takwa/";

  constructor(private httpClient:HttpClient) { 
    
  }
  
  AfficherProduit():Observable<Produit[]> {
    return this.httpClient.get<Produit []>(`${this.baseUrl}`);}

  AjouterProduit(produit:Produit):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,produit);
  }

  SupprimerProduit(ref:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}${ref}`);

  }
  getProduitByRef(ref:number):Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseUrl}${ref}`);

  }
  ModifierProduit(ref:number,produit:Produit):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}${ref}`,produit);

  }

    
}
