import React , { Component } from "react";
import UserDisplay from "../containers/userDisplay.jsx";
import UserInput from "../containers/userInput.jsx";
const App = ( ) => (
    <center>
        <h1>List of People</h1>
        <UserInput></UserInput>
        <br/>
        <UserDisplay></UserDisplay>
    </center>
);



export default App;