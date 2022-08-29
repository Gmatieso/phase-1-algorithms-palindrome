function isPalindrome(word) {
  
  let j = word.length -1;

  for( let i = 0; i < j/2; i++){
    // forward character
    let x = word[i];

    // backward character
    let y = word[j-1];

    if(x != y ){

      // return false if string not match 
      return false;
    }
  }
      // return true if string is palindrome 
      return true;
}

let word = "racecar";
isPalindrome(word)

/* 
  Add your pseudocode here

  Approach1:
  First iterate over a string in forward and backward direction.

  Check if all foward and backward character matches, return true.

  if all forward and backward character does not match, return false
  else return is true, it is a palindrome.
*/



/*
  Add written explanation of your solution here
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
