const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'mypassword';
const someOtherPlaintextPassword = 'not_bacon';
const myHash = "$2b$10$lES66qE7j557z2q6xRNO9.53Hvse7tWTL0n5iqGnd6d6yEnxytPiy";

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  console.log(hash);
  // Store hash in your password DB.
})

// bcrypt.compare(myPlaintextPassword, myHash, function(err, result) {
//   console.log(result);
//   // result == true
// });