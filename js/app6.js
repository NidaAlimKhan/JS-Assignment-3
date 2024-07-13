const user =prompt('Enter your name:');
const user2 =user.toLocaleLowerCase();

switch (user2) {
    case 'iqra':
        console.log('Iqra is a friend');
        alert('Iqra is a friend');
        break;
    case 'rabia':
        console.log('Rabia is a friend');
        alert('Rabia is a friend');
        break;
    case 'khasia':
        console.log('Khasia is a friend');
        alert('Khasia is a friend');
        break;
    default:
        console.log("I don't know who are you");
        alert("I don't know who are you");
}
