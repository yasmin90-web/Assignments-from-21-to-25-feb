//not of same length, can't be anagram
function isAnagram(a,b){
	if (a.length !== b.length) {
		return false;
	}
	// rearrange the string
	var str1 = a.split('').sort().join('');
	var str2 = b.split('').sort().join('');

	var result = (str1 === str2);
	return result;

}
//takeing user input
var a = prompt("Enter the first String");
var b = prompt("Enter  the second String");
//checking the out put
document.write(isAnagram(a,b));