import React from 'react';

const ContactTable = ({ contacts, handle_edit, handle_delete }) => {
  return (
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
          {contacts.map((contact) => (
            <tr key={contact.index}>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handle_edit(contact.index)}>
                  edit
                </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handle_delete(contact.index)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;