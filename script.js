function firstWord(s) {
  // your code here
	str = str.trim();

	const spaceIndex = str.indexOf(' ');

	return spaceIndex === -1 ? str : str.substring(0, spaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
