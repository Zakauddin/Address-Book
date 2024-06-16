class AddressBook {

    // private variable to store a lit of contact objects
    #contacts;

    constructor(data){
        this.#contacts = data;
    }

    // retruns a json of including all the details of all the contacts
    view_all() {
        const data =  this.#contacts.map((contact, index) => {
            const temp = contact.get_json();
            temp["index"] = index;
            return temp;
        });
        return data;
    }

    // deletes the contact of the index provided
    delete_contact(index) {
        if (index < this.#contacts.lenth) { 
            this.#contacts.splice(index, 1);
            return "Contact Deleted!";
        } else {
            return "Invalid Index!";
        }
    }

    add_contact(contact) {
        this.#contacts.push(contact);
        return "Contact Added!";
    }

    // search for all relevant contacts matching the query in the data parameter
    search_contacts(data) {
        const l_query = data.query.toLowerCase();

        return this.#contacts.reduce((result, contact, index) => {
            if(contact.search(l_query) === true) {
                const contact_JSON = contact.get_json();
                contact_JSON["index"] = index;
                result.push(contact_JSON);
            }

            return result;
        }, []);
    }

    // update details of the contact at the specified index
    update_contact(data) {
        const index = data.index;
        this.#contacts[index].update(data);
        return "Contact Updated!";
    }
}

module.exports = AddressBook;