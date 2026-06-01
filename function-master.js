//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take an object 
//O: return object as array
//C: n/a
//E: n/a
function objectValues(object) {
	// CODE HERE
	// use object.values to return object values
	return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take an object 
//O: return object keys as a string with a space
//C: n/a
//E: n/a
function keysToString(object){
	// CODE HERE
	return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take an object 
//O: return object values to a string with a space
//C: n/a
//E: n/a
function valuesToString(object) {
	// CODE HERE
	return Object.values(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take an object or array
//O: return if its an object or an array
//C: n/a
//E: n/a
function arrayOrObject(collection) {
	//create variables to return the word object and array
	var obj = "object"
	var arr = "array"
	// CODE HERE
	//test if it is an array
	if (Array.isArray(collection)) {
		return arr;
		//return object if it is not an array
	} else {
		return obj;
	}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take a string
//O: return the string with a first letter capitalized
//C: n/a
//E: n/a
function capitalizeWord(string) {
	// CODE HERE
	return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take a string
//O: return the string in all caps
//C: n/a
//E: n/a
function capitalizeAllWords(string) {
	// CODE HERE
	return string.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take an object with a name property
//O: return the name with welcome
//C: n/a
//E: n/a
function welcomeMessage(object) {
	// CODE HERE
	return `Welcome ${object.name[0].toUpperCase() + object.name.slice(1)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take an object with a name and species property
//O: return a string with "is a" with those properties
//C: n/a
//E: n/a
function profileInfo(object) {
	// CODE HERE
	return `${object.name[0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take an object 
//O: return a string with with a noises array separated by a space, if there are no noises return 'there are no noises'"
//C: n/a
//E: n/a
function maybeNoises(object) {
	//CODE HERE
	if (Array.isArray(object.noises) && object.noises.length > 0) {
		return object.noises.join(' ');
	  } else {
		return "there are no noises";
	  }
	}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Should take a string of words and a word 
//O: return true if <word> is in <string of words>, otherwise return false."
//C: n/a
//E: n/a
function hasWord(string, word) {
	// CODE HERE
	if (string.includes(word)) {
		return true;
	} else {
		return false;
	}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take a name and an object and add the name to the object's friends array
//O: return the new object
//C: n/a
//E: n/a
function addFriend(name, object) {
	// CODE HERE
	object.friends.push(name);
	return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//I: take a name and an object 
//O: return true if name is a friend of object
//C: n/a
//E: n/a
function isFriend(name, object) {
	// CODE HERE
	if (object.includes(name)) {
		return true;
	} else {
		return false;
	}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: take a name and a list of people
//O: return a list of all the names that is not friends with
//C: n/a
//E: n/a
function nonFriends(name, array) {
	// CODE HERE
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== name) {
			result.push(array[i]);
		}
	}
	return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Should take an object, a key and a value
//O: update the property key on object with new value. 
//C: If key does not exist on object create it.
//E: n/a
function updateObject(object, key, value) {
	// CODE HERE
	object[key] = value;
	return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Should take an object and an array of strings.
//O: Should remove any properties on object that are listed in array 
//C: In/a
//E: n/a
function removeProperties(object, array) {
	// CODE HERE
	for (var i = 0; i < array.length; i++) {
		if (array[i] === Object.values(object)) {
			delete object[array[i]];
		}
	}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Take an array with duplicates
//O: return with the duplicates removed
//C: n/a
//E: n/a
function dedup(array) {
	// CODE HERE
	var nodups = [];
  
	for (var i = 0; i < array.length; i++) {
	  if (nodups.indexOf(array[i]) === -1) {
		nodups.push(array[i]);
	  }
	}
	
	return nodups;
}
console.log(dedup(1, 1, 2, 2));
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
	typeof process !== "undefined" &&
	typeof process.versions.node !== "undefined"
) {
	// here, export any references you need for tests //
	module.exports.objectValues = objectValues;
	module.exports.keysToString = keysToString;
	module.exports.valuesToString = valuesToString;
	module.exports.arrayOrObject = arrayOrObject;
	module.exports.capitalizeWord = capitalizeWord;
	module.exports.capitalizeAllWords = capitalizeAllWords;
	module.exports.welcomeMessage = welcomeMessage;
	module.exports.profileInfo = profileInfo;
	module.exports.maybeNoises = maybeNoises;
	module.exports.hasWord = hasWord;
	module.exports.addFriend = addFriend;
	module.exports.isFriend = isFriend;
	module.exports.nonFriends = nonFriends;
	module.exports.updateObject = updateObject;
	module.exports.removeProperties = removeProperties;
	module.exports.dedup = dedup;
}
