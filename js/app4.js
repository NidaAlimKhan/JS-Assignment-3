const prize = prompt('Enter prize number (between 1 to 10):');
const prize2 = parseInt(prize);
const outputMessage ='My Selection: ';

let prizeAward;
switch (prize2) {
    case 0:
        prizeAward ='$10!';
        break;
    case 1:
        prizeAward ='$50!';
        break;
    case 2:
        prizeAward ='$100!';
        break;
    case 3:
        prizeAward ='$150!';
        break;
    case 4:
        prizeAward ='$200!';
        break;
    case 5:
        prizeAward ='$250!';
        break;
    case 6:
        prizeAward ='$300!';
        break;
    case 7:
        prizeAward ='$350!';
        break;
    case 8:
        prizeAward ='$400!';
        break;
    case 9:
        prizeAward ='$450!';
        break;
    case 10:
        prizeAward ='$500!';
        break;
    default:
        prizeAward ='No prize this time. Better luck next time!';
}
console.log(outputMessage+prizeAward);