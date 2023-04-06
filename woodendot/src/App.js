import React from "react";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import ItemsPage from "./Components/ItemsPage";
import PhotoPage from "./Components/PhotoPage";
import CloePage from "./Components/CloePage";

function App() {
    return (
        <div>
            <NavBar/>
            <Main/>
            <ItemsPage/>
            <PhotoPage/>
            <CloePage/>
        </div>
    );
}

export default App;
