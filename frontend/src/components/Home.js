import React from 'react';

const Home = ({ addressBook }) =>  {

    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { addressBook.view_all().map ((contact, index) => (
                        <tr key = {index}>
                            <td>{contact.get_first_name()}</td>
                            <td>{contact.get_last_name()}</td>
                            <td>{contact.get_phone()}</td>
                            <td>{contact.get_email()}</td>
                        </tr>    
                    )) }
                </tbody>
            </table>
        </div>
    );
};

export default Home;