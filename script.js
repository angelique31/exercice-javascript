//Classe compteBancaire
class CompteBancaire {  //on déclare l'objet CompteBancaire avec le mot-clé class
  constructor(montant = 0,) {
    this.solde = montant;
    // this.soldePositif = soldePositif;
    // this.soldeNegatif = soldeNegatif;
  }
  
  deposer(montant) { //j'ajoute un montant au solde avec la fonction deposer
    this.solde += montant;
  }
  
  retirer(montant) { //j'enlève un montant au solde
    this.solde -= montant;
  }
  afficherSolde() {
  console.log (`le compte présente un solde de ${solde}`)
  }

}


let compteBancaire = new CompteBancaire (25)
compteBancaire.deposer(100)

compteBancaire.retirer(20)
console.log(compteBancaire)
//class avec fonction main ()
// class main () {

// }


//Compte épargne
class CompteEpargne extends CompteBancaire{ //L'objet CompteEpargne va hériter des propriétés de CompteBancaire
  constructor(montant = 0, tauxInteret = 6 ) {
    super(montant, tauxInteret);
    this.tauxInteret = tauxInteret;
  }
  calculInteret() {
    this.solde * this.tauxInteret
    console.log(this.solde)
  }
  
}
let compteEpargne = new CompteEpargne(15, 6);
console.log(compteEpargne)
