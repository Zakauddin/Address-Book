import React, { useState } from 'react';

const NewContact = ({ addressBook }) => {
    const [first_name, set_first_name] = useState('');
    const [last_name, set_last_name] = useState('');
    const [phone, set_phone] = useState('');
    const [email, set_email] = useState('');

    const handle_submit = (e) => {
        e.preventDefault();

        alert("New Contact Added!")

        const contact = {
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
        };

        addressBook.add_contact(contact);
        fetch("http://localhost:4000/add_contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contact)
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error));;
        
        set_first_name('');
        set_last_name('');
        set_phone('');
        set_email('');
    };

    return (
        <div className="container pt-3">
            <div className="p-1 bg-danger text-white">
                <h3 className="pl-2 pt-1">Add New Contact</h3>
            </div>
            <form onSubmit={handle_submit}>
                <div className="mt-2 row">
                    <div className="col">
                        <label htmlFor="first-name">First Name</label>
                    </div>
                    <div className="col">
                        <label htmlFor="last-name">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="first-name"
                            placeholder="First name"
                            value={first_name}
                            onChange={(e) => set_first_name(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            id="last-name"
                            placeholder="Last name"
                            value={last_name}
                            onChange={(e) => set_last_name(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        pattern="[0-9]{2,}"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => set_phone(e.target.value)}
                        required
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => set_email(e.target.value)}
                        required
                    />
                </div>
                <div className="mt-3">
                    <button type="submit" className="btn btn-danger">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewContact;