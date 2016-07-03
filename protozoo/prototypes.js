// Every animal must have a name property.
// Each genus must have a genusName property.
// Each species must have a speciesName property.



// Create a base Animals function.
function Animal() {
    this.weight = null;
};

// Create a genus function for each of your favorite animals that inherits from Animal.
function Tenodera() {
    this.genusName = null;
};

Tenodera.prototype = new Animal();

// Create a species function for each of your favorite animals that inherits from the appropriate genus.
function TenoderaSinensis() {
    this.speciesName = null;
}

TenoderaSinensis.prototype = new Tenodera();

var chineseMantis = new TenoderaSinensis();

chineseMantis.speciesName = "chinese mantis";
chineseMantis.genus = "Tenodera Sinensis";
chineseMantis.grin = "less than toothy";

console.log("Manny", chineseMantis);
document.write(`<p>` + "Manny" + " is an " + `${chineseMantis.speciesName}` + " with a " + `${chineseMantis.grin}` + " grin " + " from the genus " + `${chineseMantis.genus}` + "!" + `<br>` + `</p>`);
console.log("Manny" + " is an " + chineseMantis.speciesName + " with a " + chineseMantis.grin + " grin " + " from the genus " + chineseMantis.genus + "!");

//======================================================================

function CanisLupus() {
    this.speciesName = "Gray Wolf";
}

function Canis() {
    this.furColor = "";
}

function Caninae() {
    this.legCount = 4;
}

Caninae.prototype = new Animal();
Canis.prototype = new Caninae();
CanisLupus.prototype = new Canis();

var grayWolf = new CanisLupus();
grayWolf.speciesName = "gray wolf";
grayWolf.genus = "Canis Lupus";
grayWolf.grin = "toothy";
console.log("Wilhelm", grayWolf);
document.write(`<p>` + "Wilhelm" + " is an " + `${grayWolf.speciesName}` + " with a " + `${grayWolf.grin}` + " grin " + " from the genus " + `${grayWolf.genus}` + "!" + `<br>` + `</p>`);
console.log("Wilhelm" + " is an " + grayWolf.speciesName + " with a " + grayWolf.grin + " grin " + " from the genus " + grayWolf.genus + "!");

//============================================================================


// The lion (Panthera leo) is one of the big cats in the genus Panthera and a member of the family Felidae.
// Kingdom:	Animalia
// Phylum:	Chordata
// Clade:	Synapsida
// Class:	Mammalia
// Order:	Carnivora
// Family:	Felidae
// Genus:	Panthera
// Species:	P. leo

function Panthera() {
    this.genusName = null;
}

function PantheraLeo() {
    this.speciesName = null;
}

Panthera.prototype = new Animal();
PantheraLeo.prototype = new Panthera();

var lion = new PantheraLeo();

lion.speciesName = "lion";
lion.grin = "toothy";
lion.genus = "Panthera Leo";
console.log("Grover", lion);
document.write(`<p>` + "Grover" + " is a " + `${lion.speciesName}` + " with a " + `${lion.grin}` + " grin " + " from the genus " + `${lion.genus}` + "!" + " " + `<br>` + `</p>`);
console.log("Grover" + " is a " + lion.speciesName + " with a " + lion.grin + " grin " + " from the genus " + lion.genus + "!");



///////////////////===================================

// Kingdom:	Animalia
// Phylum:	Chordata
// Class:	Reptilia
// Superorder:	Crocodylomorpha
// Order:	Crocodilia
// Family:	Alligatoridae
// Subfamily:	Alligatorinae
// Genus:	Alligator
function Alligator() {
    this.genus = null;
}

function AlligatorMississippiensis() {
    this.speciesName = null;
}

Alligator.prototype = new Animal();
AlligatorMississippiensis.prototype = new Alligator();

var alligator = new AlligatorMississippiensis();

alligator.speciesName = "alligator";
alligator.genus = "Alligator Mississippiensis";
alligator.grin = "toothy";

console.log("Inglebert", alligator);
document.write(`<p>` + "Inglebert" + " is an " + `${alligator.speciesName}` + " with a " + `${alligator.grin}` + " grin " + " from the genus " + `${alligator.genus}` + "!" + `</p>`);

console.log("Inglebert" + " is an " + alligator.speciesName + " with a " + alligator.grin + " grin " + " from the genus " + alligator.genus + "!");