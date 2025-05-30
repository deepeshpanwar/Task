function longestUniqueSubstr(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let tempStr = ""; 

    for (let j = i; j < s.length; j++) {
      if (tempStr.includes(s[j])) {
        break; 
      } else {
        tempStr += s[j];
        maxLength = Math.max(maxLength, tempStr.length);
      }
    }
  }

  return maxLength;
}

console.log(longestUniqueSubstr("abcabcbb"));      
console.log(longestUniqueSubstr("aaaa")); 
console.log(longestUniqueSubstr("deepesh"));

     
