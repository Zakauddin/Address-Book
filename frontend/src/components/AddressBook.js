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
        const data =  this.contacts.map((contact, index) => this.convert_contact_to_JSON(contact, index));
        return data;
    }

    delete_contact(index) {
        this.contacts.splice(index, 1);
    }

    add_contact(data) {
        this.contacts.push(new Contact(data.first_name, data.last_name, data.phone, data.email))
    }

    search_contacts(data) {
        const l_query = data.query.toLowerCase();
        
        return this.contacts.reduce((result, contact, index) => {
            const l_first_name = contact.get_first_name().toLowerCase();
            const l_last_name = contact.get_last_name().toLowerCase();
            const phone = contact.get_phone();
            const l_email = contact.get_first_name().toLowerCase();

            if(
                l_first_name.includes(l_query) || l_last_name.includes(l_query) || phone.includes(l_query) || l_email.includes(l_query)
            ) {
                const contact_JSON = this.convert_contact_to_JSON(contact, index);
                result.push(contact_JSON);
            }

            return result;
        }, []);
    }
}

module.exports = AddressBook;