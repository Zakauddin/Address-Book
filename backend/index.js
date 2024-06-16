const AddressBook = require("./AddressBook");
const Contact = require("./Contact");
const data = require('./data.json');
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

contacts_array = data.map(
    ({ first_name, last_name, phone, email }) =>
      new Contact(first_name, last_name, phone, email)
);

const book = new AddressBook(contacts_array);

app.get("/get_all_contacts", (req, res) => {
    res.status(200).json(book.view_all());
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});