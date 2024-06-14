import React, { useState } from 'react';

const EditContact = ({ edit_contact, set_edit_contact, set_edit_done}) => {

    const [first_name, set_first_name] = useState(edit_contact.first_name);
    const [last_name, set_last_name] = useState(edit_contact.last_name);
    const [phone, set_phone] = useState(edit_contact.phone);
    const [email, set_email] = useState(edit_contact.email);

    const confirm_edit_contact = (e) => {
        e.preventDefault();

        const contact = {
            index: edit_contact.index,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
        };

        set_edit_contact(contact);
        set_edit_done("True");

        set_first_name('');
        set_last_name('');
        set_phone('');
        set_email('');
    };

    return (
        <>
            <div className="p-1 bg-danger text-white">
                <h3 className="pl-2 pt-1">Edit Contact</h3>
            </div>
            <form onSubmit={confirm_edit_contact}>
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
                            placeholder="Last Name"
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
                        Update
                    </button>
                </div>
            </form>
        </>
    );
  };
  
  export default EditContact;