import { Component } from '@angular/core';

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

}
