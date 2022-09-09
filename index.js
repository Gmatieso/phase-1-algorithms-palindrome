function reverse(word){
// 'abc' => 'cba'
const wordArray = word.split("")
const reversedWordArray =  wordArray.reverse()
const reversedWord = reversedWordArray.join("")

return reversedWord
}

function isPalindrome(word) {

  // return the input string 
 const reversedWord = reverse(word)

 if (word === reversedWord){

  return true

 }else{

  return false
 }
}


/* 
  Add your pseudocode here

 if the input is the same as the reversed input
      return true
  else
      return false 

*/



/*
  Add written explanation of your solution here

  Function should return true if a word is a palindrome and false if not. since JavaScript doesn't 
  have inbuilt reverse method. 
  First will do the following.
  take word and split into a string using the string method. This will put the word in an array
  take the split array and reverse it using the reverse method . note reverse method only act on array
  after reversing the array. its time to join the array. use the join method. to join the array

  return the results of the joined in the function . 
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
