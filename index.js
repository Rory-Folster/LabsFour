function binary(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 3);
}
console.log(binary('110011001'));
console.log(binary('1001234'));