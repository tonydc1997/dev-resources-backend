const ValidationError = require('../utils/classes/ValidationError');

module.exports = user => {
    return new Promise((resolve, reject) => {
        if (!user || typeof user !== 'object') {
            reject(new ValidationError('Please enter a valid user object'));
        }

        if (!user.id || typeof user.id !== 'string') {
            reject(new ValidationError('Wrong user ID'));
        }

        if (!user.username || typeof user.username !== 'string') {
            reject(new ValidationError('Username not valid'));
        }

        if (!user.avatar || typeof user.avatar !== 'string') {
            reject(new ValidationError('The avatar is not valid'));
        }

        if (!user.discriminator || typeof user.discriminator !== 'string') {
            reject(new ValidationError('Discriminator is not valid'));
        }

        resolve(true);
    })
    .catch(error => console.error(error));
};
