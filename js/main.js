$(document).ready(function(){

var randomizer = {};
randomizer.listIcons = ["Pauli Murray was a human rights activist, legal scholar, feminist, poet, priest, labor organizer, and multiracial Black LGBTQ+ community member of the transmasculine experience.", "Langston Hughes was an African American writer whose poems, columns, novels and plays made him a leading figure in the Harlem Renaissance of the 1920s.", "Sylvia Rivera was a gay and transgender rights activist and veteran of the 1969 Stonewall uprising. Rivera, who identified as a drag queen, participated in demonstrations with the Gay Liberation Front.", "Gladys Bentley was a blues singer, pianist, entertainer, and drag king pioneer during the Harlem Renaissance. Gladys performed in clubs all over the country and inspired characters in several books.", "Marsha P. Johnson was an activist, self-identified drag queen, performer, and survivor. She was a prominent figure in the Stonewall uprising of 1969.", "Storm\xE9 DeLarverie was a civil rights activist and the legendary Stonewall butch lesbian who \"threw the first punch\" of the Stonewall Uprising on June 28, 1969.", "James Baldwin was an essayist, playwright, novelist and voice of the American civil rights movement known for works including 'Notes of a Native Son,' 'The Fire Next Time' and 'Go Tell It on the Mountain.'"];

randomizer.randomize = function () {
	$("#answer").hide();
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listIcons.length;
	var randomIndex = Math.floor(randomNumberArray);
	var randomAnswer = this.listIcons[randomIndex];
	$("#answer").text(randomAnswer);
	$("#answer").fadeIn(800);
};

var onClick = function() {
    randomizer.randomize();
};

$("#randomizerButton").click(onClick);

});
