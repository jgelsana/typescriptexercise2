export const validateISBN = (isbn: string) => {

    //validate if 10 characters long
    if(isbn.length != 10) {
        console.log(isbn + ' -> Invalid ISBN.');
        return;
    }

    //validate if the first NINE characters are digits
    if(!/^\d{9}/.test(isbn)) {
        console.log(isbn + ' -> Invalid ISBN.');
        return;
    }

    //validate if the LAST character is a digit or the letter 'X'
    if(!/\d|X$/.test(isbn[9])) {
        console.log(isbn + ' -> Invalid ISBN.');
        return;
    }

    //compute for the "sum of the digits-multiplied-by-their-position" value
    let stringArray: string[] = isbn.split('');
    var sumOfProducts: number = 0;
    for(let i = 0; i < (stringArray.length - 1); i++) {
        const value = Number(stringArray[i]) * (i + 1);
        sumOfProducts += value;
    }
    if(stringArray[9] === 'X') {
        sumOfProducts += 100;
    } else {
        sumOfProducts += Number(stringArray[9]) * 10;
    }

    //validate if sumOfProducts is divisible by 11
    if(sumOfProducts % 11 !== 0) {
        console.log(isbn + ' -> Invalid ISBN.');
        return;
    }

    console.log(isbn + ' -> Valid ISBN');
    return;
}