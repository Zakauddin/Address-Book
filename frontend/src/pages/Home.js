import React, { useState, useEffect } from 'react';
import ContactTable from '../components/ContactsTable';
import SearchForm from '../components/SearchForm';
import EditContact from '../components/EditContact'

const Home = ({ addressBook }) =>  {

    const [contacts, set_contacts] = useState([]);
    const [query, set_query] = useState("");
    const [query_json, set_json] = useState({query : ""});
    const [edit_contact, set_edit_contact] = useState(null);
    const [edit_done, set_edit_done] = useState(null);

    useEffect(() => {
        if (query_json.query === "") {
            set_contacts(addressBook.view_all());
        } else {
            set_contacts(addressBook.search_contacts(query_json));
        }
        
    }, [addressBook, query_json, edit_done]);

    useEffect(() => {
        if (edit_done === "True"){
            addressBook.update_contact(edit_contact);
            set_edit_contact(null);
            set_edit_done(null)
        } else if (edit_done === "False"){
            set_edit_contact(null);
            set_edit_done(null)
        }
    }, [addressBook, edit_contact, edit_done]);

    const handle_query = (e) => {
        e.preventDefault();
        set_json({query: query});
    }

    const handle_edit_contact = (index) => {
        const contact_to_edit = contacts.find((contact) => contact.index === index);
        set_edit_contact(contact_to_edit);
    };

    const handle_delete_contact = (index) => {
        addressBook.delete_contact(index);
        if (query === "") {
            set_contacts(addressBook.view_all());
        } else {
            set_contacts(addressBook.search_contacts(query_json));
        }
    };

    return (
        <div className="container pt-3">

            {edit_contact !== null? (
                <EditContact 
                    edit_contact ={edit_contact}
                    set_edit_contact = {set_edit_contact}
                    set_edit_done = {set_edit_done}
                />
            ) : (
                <>
                    <SearchForm
                        query={query}
                        handle_query={handle_query}
                        set_query={set_query}
                    />

                    {contacts.length > 0 ? (
                        <ContactTable
                            contacts={contacts}
                            handle_edit={handle_edit_contact}
                            handle_delete={handle_delete_contact}
                        />
                        
                    ) : (
                        <h3 className='pt-5'>No contacts found.</h3>
                    )}
                </>
            )}
        </div>
    );
};

export default Home;