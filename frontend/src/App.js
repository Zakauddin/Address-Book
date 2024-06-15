import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import AddressBook from "./components/AddressBook";

function App() {
    // an object of the AddressBook is created and is passed by reference to all the other components.
    const book = new AddressBook();

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
