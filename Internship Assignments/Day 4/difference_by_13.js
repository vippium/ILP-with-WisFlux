function differenceBy13(num) {
    if (num > 13) {
        return 2 * (num - 13);
    } else {
        return 13 - num;
    }
}

let number = parseInt(prompt("Enter a number: "));
alert("The result is: " + differenceBy13(number));