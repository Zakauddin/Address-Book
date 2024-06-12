const AddressBook = require('./AddressBook') 

function Home() {
    
    const book = new AddressBook();

    return (
        <div>
            <h1>Address Book</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { book.view_all().map ((contact, index) => (
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