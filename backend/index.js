const AddressBook = require("./AddressBook");
const Contact = require("./Contact");
const data = require('./data.json');
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

contacts_array = data.map(
    ({ first_name, last_name, phone, email }) =>
      new Contact(first_name, last_name, phone, email)
);

const book = new AddressBook(contacts_array);

app.get("/get_all_contacts", (req, res) => {
    res.status(200).json(book.view_all());
});

app.get("/search_contacts/:query", (req, res) => {
    const query = {"query" : req.params.query};
    res.status(200).json(book.search_contacts(query));
});

app.post("/add_contact", (req, res) => {
    if (req.body["first_name"] && req.body["last_name"] && req.body["phone"] && req.body["email"] ){
        const contact = new Contact(req.body["first_name"], req.body["last_name"], req.body["phone"], req.body["email"]);
        book.add_contact(contact);
        const last_index = book.get_size() - 1;
        const temp =  book.get_contact(last_index);
        res.status(201).json(temp);
        
    } else{
        res.status(206).json({"error" : "Incomplete details"})
    }
}

);



const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = server