const Contact = require('./Contact') 
const data = require('./data.json');

class AddressBook {
    constructor(){
        this.contacts = data.map(
            ({ first_name, last_name, phone, email }) =>
              new Contact(first_name, last_name, phone, email)
          );

    }
}

const book = new AddressBook();

console.log(data);