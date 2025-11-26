const bcrypt = require('bcryptjs');

const password = 'abcdef';

bcrypt.hash(password, 10).then(hash => {
    console.log('Password:', password);
    console.log('Hashed:', hash);
});
