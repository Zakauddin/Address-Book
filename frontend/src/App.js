import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";

function App() {

    return (
        <BrowserRouter>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new_contact" element={<NewContact />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
