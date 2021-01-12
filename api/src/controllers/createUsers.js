const faker = require("faker");
const { User } = require('../db.js')

module.exports = {
    async generateUsers(req, res) {
        try {
            for (let i = 0; i < 200; i++) {
                await User.create({
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    password: 'password'
                })
            }
            res.status(200).send('OK')
        } catch (err) {
            console.log(err)
        }
    }
}