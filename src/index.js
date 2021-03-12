module.exports = function toReadable(number) {
    let arr_of_number = String(number).split('');
    let result = '';
    let k = 0;

    function toReadableNumber(num, i) {
        let one = 'one';
        let two = 'two';
        let three = 'three';
        let four = 'four';
        let five = 'five';
        let six = 'six';
        let seven = 'seven';
        let eight = 'eight';
        let nine = 'nine';

        let eleven = 'eleven';
        let twelve = 'twelve';
        let thirteen = 'thirteen';
        let fourteen = 'fourteen';
        let fifteen = 'fifteen';
        let sixteen = 'sixteen';
        let seventeen = 'seventeen';
        let eighteen = 'eighteen';
        let nineteen = 'nineteen';

        let ten = 'ten';
        let twenty = 'twenty ';
        let thirty = 'thirty ';
        let forty = 'forty ';
        let fifty = 'fifty ';
        let eighty = 'eighty ';

        num = Number(num);

        switch (num) {
            case 0:
                return '';
            case 1:
                return (i == 1) ? '' : (i == 2) ? one + ' hundred ' : one;
            case 2:
                return (i == 1) ? twenty : (i == 2) ? two + ' hundred ' : two;
            case 3:
                return (i == 1) ? thirty : (i == 2) ? three + ' hundred ' : three;
            case 4:
                return (i == 1) ? forty : (i == 2) ? four + ' hundred ' : four;
            case 5:
                return (i == 1) ? fifty : (i == 2) ? five + ' hundred ' : five;
            case 6:
                return (i == 1) ? six + 'ty ' : (i == 2) ? six + ' hundred ' : six;
            case 7:
                return (i == 1) ? seven + 'ty ' : (i == 2) ? seven + ' hundred ' : seven;
            case 8:
                return (i == 1) ? eighty : (i == 2) ? eight + ' hundred ' : eight;
            case 9:
                return (i == 1) ? nine + 'ty ' : (i == 2) ? nine + ' hundred ' : nine;
            case 10:
                return ten;
            case 11:
                return eleven;
            case 12:
                return twelve;
            case 13:
                return thirteen;
            case 14:
                return fourteen;
            case 15:
                return fifteen;
            case 16:
                return sixteen;
            case 17:
                return seventeen;
            case 18:
                return eighteen;
            case 19:
                return nineteen;
        }
    }

    if (number == 0)
        result = 'zero';
    else if (number > 0 && number < 20)
        result = toReadableNumber(number, 0);
    else if (number >= 20 && number < 100)
        result = toReadableNumber(arr_of_number[0], 1) + toReadableNumber(arr_of_number[1], 0);
    else if (number >= 100)
        result = (arr_of_number[1] > 1) ? toReadableNumber(arr_of_number[0], 2) + toReadableNumber(arr_of_number[1], 1) + toReadableNumber(arr_of_number[2], 0) : toReadableNumber(arr_of_number[0], 2) + toReadableNumber(arr_of_number[1] + arr_of_number[2], 0);

    return result.trim();
}
