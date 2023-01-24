const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    phone: String,
})

module.exports = model('Contact', contactSchema) 