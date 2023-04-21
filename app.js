// A random message generator that says silly things when running

const staticMessage = 'You';

const array1 = ['will ', 'must ', 'could ', 'shall ', 'may ', 'may not ', 'can ', 'can not '];
const array2 = ['be a child', 'fly in the high blue sky', 'feel something tapping your shoulder in 3... 2... 1...', 'be demoralized', 'eat a pound on quarter pounders', 'have a stroke immediately after saying anything', 'write your memories in HTML'];

function getRandomString(arr1, arr2) {
    const randomIndex1 = Math.floor(Math.random() * arr1.length);
    const randomIndex2 = Math.floor(Math.random() * arr2.length);
    const randomString1 = arr1[randomIndex1];
    const randomString2 = arr2[randomIndex2];
    return randomString1 + randomString2;
}
const result = getRandomString(array1, array2);
console.log(`${staticMessage} ${result}`);