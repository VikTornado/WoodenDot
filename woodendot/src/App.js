import React from "react";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import ItemsPage from "./Components/ItemsPage";
import PhotoPage from "./Components/PhotoPage";

function App() {
    return (
        <div>
            <NavBar/>
            <Main/>
            <ItemsPage/>
            <PhotoPage/>
        </div>
    );
}

export default App;
