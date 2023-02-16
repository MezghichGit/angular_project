export class Etudiant {
  public nom: string = "";
  public email: string = "";
  public tel: string = "";

  public constructor(nom: string, email: string, tel: string) {
    this.nom = nom;
    this.email = email;
    this.tel = tel;
  }

  public info(){
    console.log("Je suis : "+this.nom+" |  mon email : "+this.email +" | mon tel : "+this.tel);
  }

}
