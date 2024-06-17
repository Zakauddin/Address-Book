import React, { useState, useEffect } from 'react';
import ContactTable from '../components/ContactsTable';
import SearchForm from '../components/SearchForm';
import EditContact from '../components/EditContact'

const Home = ({ addressBook }) =>  {

    const [contacts, set_contacts] = useState([]); //stores the list of contacts' json
    const [query, set_query] = useState(""); //stores the current search query
    const [query_json, set_json] = useState({query : ""}); //stores the query json that is sent to the address book object
    const [edit_contact, set_edit_contact] = useState(null); //stores the details of the contact that needs to be edited
    const [edit_done, set_edit_done] = useState(null); //indicator to confirm that edit mode is closed

    const get_all_contacts = () => {
        fetch('http://localhost:4000/get_all_contacts')
                .then(response => response.json())
                .then(json => set_contacts(json))
                .catch(error => console.error(error));
    }

    const get_searched_contacts = (query) => {
        fetch('http://localhost:4000/search_contacts/' + query)
                .then(response => response.json())
                .then(json => set_contacts(json))
                .catch(error => console.error(error));
    }

    

    // gathers the appropriate set of contact list whenever the component is rendered
    useEffect(() => {
        if (query_json.query === "") {
            get_all_contacts()
        } else {
            get_searched_contacts(query);
        }
    }, [addressBook, query_json, edit_done]);

    // updates the contact in the address book whenever editing is completed
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

    // updates the query json whenever a new search is made
    const handle_query = (e) => {
        e.preventDefault();
        set_json({query: query});
    }

    // finds the contact to be edited based on the index and updates the edit contact variable
    const handle_edit_contact = (index) => {
        const contact_to_edit = contacts.find((contact) => contact.index === index);
        set_edit_contact(contact_to_edit);
    };

    // deletes the selected contact and updates the table
    const handle_delete_contact = (index) => {
        addressBook.delete_contact(index);
        if (query === "") {
            get_all_contacts()
        } else {
            get_searched_contacts(query);
        }
    };

    return (
        <div className="container pt-3">
            {/* checks if a contact needs to be edited */}
            {edit_contact !== null? (
                <EditContact 
                    edit_contact ={edit_contact}
                    set_edit_contact = {set_edit_contact}
                    set_edit_done = {set_edit_done}
                />
            ) : (
                <>
                    {/* displays the search bar */}
                    <SearchForm
                        query={query}
                        handle_query={handle_query}
                        set_query={set_query}
                    />

                    {/* if number of contact being searched is greater than 0, displays them in  a table */}
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