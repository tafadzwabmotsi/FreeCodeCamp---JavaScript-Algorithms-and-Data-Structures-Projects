function telephoneCheck(str) {
    str = str.replace(/\s*/g, '');
    let isValidParenthesis = /\(/.test(str[0]) && /\)/.test(str[4]);
    let startsWithDigit = /\d/.test(str[0]);
  
    let isTelephoneValid = false;
  
     if (/\b\d{3}\-\d{3}\-\d{4}\b/.test(str)){
       if(isValidParenthesis){
         isTelephoneValid = true;
       }
  
       else if(startsWithDigit){
         isTelephoneValid = true;
       }
     }
  
     else if (/(\(\d{3}\)\d{3}\-\d{4})/.test(str) || /\d{3}\-\d{3}\-\d{4}/.test(str)){
       if(isValidParenthesis){
         isTelephoneValid = true;
       }
  
       else if (startsWithDigit){
         let strMatch = str.match(/\d/g);
         if (strMatch.length == 10 || (strMatch.length == 11 && parseInt(strMatch[0]) === 1)){
         isTelephoneValid = true;
        }
       }
     }
  
    else if (/\b\d{10}\b/g.test(str)){
       if(isValidParenthesis){
         isTelephoneValid = true;
       }
  
       else if(startsWithDigit){
         isTelephoneValid = true;
  
       }
     }
  
     else if(/\b\d{11}\b/g.test(str)){
       let strMatch = str.match(/\d/g);
       if(strMatch.length == 11 && strMatch[0] == 1){
          isTelephoneValid = true;
       }
     }
    return isTelephoneValid;
  }
  
  telephoneCheck("(6054756961)");
  