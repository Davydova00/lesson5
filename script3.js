 // 3. isPolidrom("aba") => true
     //isPolidrom("abc") => false
     function isPolidrom(str) {
      str = str.toLowerCase();
      return str ===str.split('').reverse().join("");
    }
    console.log(isPolidrom("aba"));
    console.log(isPolidrom("abc"));
  