import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact"

const AddressBook = require('./components/AddressBook') 

function App() {
    const book = new AddressBook();
    // console.log(book);
    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home addressBook={book} />} />
                    <Route path="/new_contact" element={<NewContact addressBook={book} />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
