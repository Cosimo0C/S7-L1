class User {
  constructor(_firstName, _lastName, _age, _location) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._age = _age;
    this._location = _location;
  }
  compar(utente) {
    if (utente._age < this._age) {
      return `${this._firstName} è più grande di ${utente._firstName}`;
    } else {
      return `${utente._firstName} è più grande di ${this._firstName}`;
    }
  }
}
const p1 = new User("giacomo", "di rosso", 25, "milano ");
const p2 = new User("marco", "dito", 18, "torino ");
const p3 = new User("angelo", "lozio", 47, "venezia ");
const p4 = new User("cesare", "rino", 70, "roma ");
console.log(p1.compar(p2));
console.log(p4.compar(p3));

//

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this._petName = _petName;
    this._ownerName = _ownerName;
    this._species = _species;
    this._breed = _breed;
  }
  padroneUgu(padrone) {
    return padrone._ownerName === this._ownerName;
  }
}
const arrayPet = document.createElement("array");
const pet1 = new Pet("billy", "marco", " cane", "rotweiler");
const pet2 = new Pet("rosa", "paolo", " gatto", "persiano");
const pet3 = new Pet("mila", "giulia", " cane", "pitbull");
const pet4 = new Pet("max", "marco", " coniglio", "coniglio rex");
