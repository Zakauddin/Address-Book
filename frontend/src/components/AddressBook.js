const Contact = require('./Contact') 
const data = require('./data.json');

class AddressBook {
    constructor(){
        this.contacts = data.map(
            ({ first_name, last_name, phone, email }) =>
              new Contact(first_name, last_name, phone, email)
          );
    }

    view_all() {
        return this.contacts
    }
    
}

module.exports = AddressBook;