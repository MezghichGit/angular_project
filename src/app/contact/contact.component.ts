import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nom:string = "Mezghich";
  prenom : string = "Mohamed Amine";
  email : string = "amine.mezghich@gmail.com";
  telephone : string = "+33 06 10 20 30 40 50";
  adresse : string = "PareDieu, Lyon, France";

  locale:string="https://ecole-it.com/wp-content/uploads/2020/08/0601626159445-web-tete-500x500.jpg"

  public info()
  {
    alert("Hello tout le monde");
    console.log("Hello from console");
  }

}
