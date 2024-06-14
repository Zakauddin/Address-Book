const Contact = require('./Contact');
const data = require('./data.json');

class AddressBook {
    constructor(){
        this.contacts = data.map(
            ({ first_name, last_name, phone, email }) =>
              new Contact(first_name, last_name, phone, email)
          );
    }

    convert_contact_to_JSON(contact, index) {
        return {
            index: index,
            first_name: contact.get_first_name(),
            last_name: contact.get_last_name(),
            phone: contact.get_phone(),
            email: contact.get_email()
        };
    }

    view_all() {
        return this.contacts.map((contact, index) => this.convert_contact_to_JSON(contact, index));
    }

    delete_contact(index) {
        this.contacts.splice(index, 1);
    }

    add_contact(data) {
        this.contacts.push(new Contact(data.first_name, data.last_name, data.phone, data.email))
    }
}

module.exports = AddressBook;