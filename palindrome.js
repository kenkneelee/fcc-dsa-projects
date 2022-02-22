
function palindrome(str) {
    let arr = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '').split("");;
    console.log(arr);
    let inputword=arr.join("");
    console.log(inputword);
    let palArr= arr.reverse();
    console.log(palArr);
    let palWord=palArr.join("");
    console.log(palWord);

    if (inputword==palWord){
    return true;
    }
    else {
      return false;
      }
    }


palindrome("eye");