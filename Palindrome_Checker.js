function palindrome(str) {
    str = str.replace(/\_|\W*/g, '').toLowerCase();
    return (str == [...str].reverse().join(""));
}