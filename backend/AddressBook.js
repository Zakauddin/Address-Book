class AddressBook {

    // private variable to store a lit of contact objects
    #contacts;
    #no_of_contacts = 0;

    constructor(data){
        if (data !== undefined) {
            this.#contacts = data;
            this.#no_of_contacts = data.length;
        }
    }

    get_size(){
        return this.#no_of_contacts;
    }

    // returns the json of a contact at the specified index, mainly used for assertion while testing
    get_contact(index) {
        return this.#contacts[index].contact_JSON();
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
        if (index < this.#no_of_contacts) { 
            this.#contacts.splice(index, 1);
            this.#no_of_contacts = this.#no_of_contacts - 1;
            return "Contact Deleted!";
        } else {
            return "Invalid Index!";
        }
    }

    // adds a new contact object to the array
    add_contact(contact) {
        this.#contacts.push(contact);
        this.#no_of_contacts = this.#no_of_contacts + 1;
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
        if (index < this.#no_of_contacts) { 
            this.#contacts[index].update(data);
            return "Contact Updated!";
        } else {
            return "Invalid Index!";
        }
    }
}

module.exports = AddressBook;