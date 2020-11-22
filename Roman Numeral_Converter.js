const PAIRS = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};


function helperFunction(PAIRS, value, lowerKey, midKey, highKey, valueByUnit){
    let romanNumeralValue = '';

    if (value > 5){
        if ((value + 1) === 10){
            romanNumeralValue += PAIRS[`${lowerKey}`] + PAIRS[`${highKey}`];
        }

        else{
            romanNumeralValue += PAIRS[`${midKey}`] + PAIRS[`${lowerKey}`].repeat(value - 5);
        }
    }

    else{
        if ((value + 1) === 5){
            romanNumeralValue += PAIRS[`${lowerKey}`] + PAIRS[`${midKey}`];
        }

        else if (value === 5){
            romanNumeralValue += PAIRS[`${valueByUnit}`];
        }

        else{
            romanNumeralValue += PAIRS[`${lowerKey}`].repeat(value);
        }
    }

    return romanNumeralValue;
}


function convertToRoman(num) {

    const thousands = Math.floor(num / 1000);
    const hundreds = Math.floor((num - thousands * 1000) / 100);
    const tens = Math.floor((num - (thousands * 1000 + hundreds * 100)) / 10);
    const ones = num - (thousands * 1000 + hundreds * 100 + tens * 10);

    const thosandsRoman = helperFunction(PAIRS, thousands, 1000, 1000, 1000, thousands * 1000);
    const hundredsRoman = helperFunction(PAIRS, hundreds, 100, 500, 1000, hundreds * 100);
    const tensRoman = helperFunction(PAIRS, tens, 10, 50, 100, tens * 10);
    const onesRoman = helperFunction(PAIRS, ones, 1, 5, 10, ones);

 return `${thosandsRoman}${hundredsRoman}${tensRoman}${onesRoman}`;
}

convertToRoman(83);
