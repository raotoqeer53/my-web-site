function checkPalindrome(string) {
    
    // find the length of a string
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            // return 'It is not a palindrome';
    document.getElementById("demo").innerHTML = "It is not a palindrome";
    return '';
        }
    }
    document.getElementById("demo").innerHTML = "It is a palindrome";
    return '';
}

// take input

// const string = '12321';
const string = 'Pakistan';

// call the function
const value = checkPalindrome(string);

console.log(value);