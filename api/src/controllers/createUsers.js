const faker = require("faker");
const { User } = require('../db.js')
module.exports = {
    async generateUsers() {
        try {
                await User.create({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    password: 'password',
                })
        } catch (err) {
            console.log(err)
        }
    }
}