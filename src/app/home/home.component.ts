import { Component } from '@angular/core';
import { Etudiant } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Déclaration d'une variable nomecole de type string initialisée avec la chaine de caractère "Ecole IT"
  nomecole : string = "Ecole IT";
  nbreStagiaires:number = 40;
  names:string[]=["Amine","Alain","Mathieu","Sara"]

  e1:Etudiant = new Etudiant("Alain","alin@gmail.com","+33123456789");
  e2:Etudiant = new Etudiant("Bruno","bruno@gmail.com","+33123456789");

  students : Etudiant[] = [this.e1,this.e2];


}
