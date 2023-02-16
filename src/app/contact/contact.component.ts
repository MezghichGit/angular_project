import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
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

  constructor(private service: UserService) // injection de dépencences

  { }


  public info()
  {
    alert(this.service.getData())
    //alert("Hello tout le monde");
    //console.log("Hello from console");
  }

}
