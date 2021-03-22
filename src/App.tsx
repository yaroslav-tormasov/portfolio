import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import MyProjects from "./MyProjects/MyProjects";
import Contacts from "./Contacts/Contacts";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
        </div>
    );
}

export default App;
