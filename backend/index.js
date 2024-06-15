const AddressBook = require("./AddressBook");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const book = new AddressBook();


app.get("/get_all_contacts", (req, res) => {
    res.status(200).json(book.view_all());
});



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});