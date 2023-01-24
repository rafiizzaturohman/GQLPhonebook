const { buildSchema } = require('graphql');
const Contact = require('../models/Contact')

var schema = buildSchema(`
input ContactInput {
    name: String
    phone: String
  }

  type Contact {
    id: ID!
    name: String
    phone: String
  }

  type Query {
    getContacts: [Contact]
    getContact(id: ID!): Contact
  }
`);

var root = {
    getrContacts: () => {
        return Contact.find()
    },
    getrContact: (id) => {
        return Contact.findById(id)
    }
};

module.exports = { schema, root }