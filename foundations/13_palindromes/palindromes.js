const palindromes = function (string) {
  cleanstring = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  start = 0;
  end = cleanstring.length - 1;
  while (start < end) {
    if (cleanstring[start] !== cleanstring[end]) {
      return false;
    }  
    start++;
    end--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
