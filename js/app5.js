const user =prompt('Enter any number:')
const user2 =parseFloat(user);
const dynamicNumber =10;

if (user2 > dynamicNumber) {
    console.log(user2 + " is greater than " + dynamicNumber);
    alert(user2 + " is greater than " + dynamicNumber);
} else if (user2 < dynamicNumber) {
    console.log(user2 + " is less than " + dynamicNumber);
    alert(user2 + " is less than " + dynamicNumber);
} else if (user2 === dynamicNumber) {
    console.log(user2 + " is equal to " + dynamicNumber);
    alert(user2 + " is equal to " + dynamicNumber);
} else {
    alert("Invalid value");
}