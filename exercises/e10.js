// EXERCISE 10
// z
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let clientsWithLetterInName = [];
  let character = letter.toLowerCase();
  for (let i = 0; i < array.length; i ++) {
    let client = array[i].name;
    let clientLowerCase = client.toLowerCase();
    for (let j in clientLowerCase) {
      if (clientLowerCase[j] === character) {
        clientsWithLetterInName.push(array[i].name);
      }
    }
  }
  return clientsWithLetterInName;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
