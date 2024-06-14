import React, { useState, useEffect } from 'react';

const Home = ({ addressBook }) =>  {

    const [contacts, set_contacts] = useState([]);

    useEffect(() => {
        set_contacts(addressBook.view_all());
    }, [addressBook]);

    const handle_delete_contact = (index) => {
        addressBook.delete_contact(index);
        set_contacts(addressBook.view_all());
    };

    const temp = (index) => {
        console.log(index);
    };

    return (
        <div className="container pt-3">
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
                    { contacts.map((contact, index) => (
                        <tr key = {index}>
                            <td>{contact.first_name}</td>
                            <td>{contact.last_name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => temp(index)}>{"edit"}</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handle_delete_contact(index)}>{"delete"}</button>
                            </td>
                        </tr>    
                    )) }
                </tbody>
            </table>
        </div>
    );
};

export default Home;