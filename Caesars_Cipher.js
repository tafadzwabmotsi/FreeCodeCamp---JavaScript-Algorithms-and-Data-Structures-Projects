function rot13(str) {
    const newStrArr = [];
  
    const capsAsciiRange = (min, max) =>{
      const arr = [];
      for (let i = min; i <= max; i++){
        arr.push(i);
      }
  
      return arr;
    }
  
    for (let index = 0; index < str.length; index++){
      if (/\w/g.test(str[index])){
        let ascii = str.charCodeAt(index) - 13;
  
        if (!capsAsciiRange(65, 90).includes(ascii)){
          ascii = str.charCodeAt(index) + 13;
        }
  
        newStrArr.push(String.fromCharCode(ascii))
      }
  
      else{
        newStrArr.push(str[index]);
      }
    }
    
    return newStrArr.join('');
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
  