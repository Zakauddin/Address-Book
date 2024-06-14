import React, { useState, useEffect } from 'react';

const Home = ({ addressBook }) =>  {

    const [query, set_query] = useState("");
    const [query_json, set_json] = useState({query : " "});

    const handle_submit = (e) => {
        e.preventDefault();

        set_json({query: query})
    }

    const [contacts, set_contacts] = useState([]);

    useEffect(() => {
        set_contacts(addressBook.search_contacts(query_json));
    }, [addressBook, query_json]);

    const handle_delete_contact = (index) => {
        addressBook.delete_contact(index);
        set_contacts(addressBook.search_contacts(query_json));
    };

    const temp = (index) => {
        console.log(index);
    };

    return (
        <div className="container pt-3">
            <div className="p-1 bg-danger text-white">
                <h3 className="pl-2 pt-1">Search Contact</h3>
            </div>
            
            <form onSubmit={handle_submit}>
                <div className="mt-3 row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="search"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => set_query(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-danger">Search</button>
                    </div>
                </div>
            </form>

            {contacts.length > 0 ? (
                <div className='pt-5'>
                    <table className="table">
                        <thead className="bg-danger text-white">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { contacts.map((contact) => (
                                <tr key = {contact.index}>
                                    <td>{contact.first_name}</td>
                                    <td>{contact.last_name}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.email}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => temp(contact.index)}>{"edit"}</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handle_delete_contact(contact.index)}>{"delete"}</button>
                                    </td>
                                </tr>    
                            )) }
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3 className='pt-5'>No contacts found.</h3>
            )}
        </div>
    );
};

export default Home;