import React from "react";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import ItemsPage from "./Components/ItemsPage";
import PhotoPage from "./Components/PhotoPage";
import CloePage from "./Components/CloePage";
import Pelican from "./Components/Pelican";
import Alaba from "./Components/Alaba";
import Alba from "./Components/Alba";
import SliderBlock from "./Components/SliderBlock";
import ItemsBlock from "./Components/ItemsBlock";
import BateaPage from "./Components/BateaPage";
import SliderText from "./Components/SliderText";

function App(props) {
    return (
        <div>
            <NavBar/>
            <Main/>
            <ItemsPage/>
            <PhotoPage/>
            <CloePage/>
            <Pelican/>
            <Alaba/>
            <Alba/>
            <BateaPage/>
            <SliderBlock/>
            <SliderText/>
            <ItemsBlock items={props.items}/>
        </div>
    );
}

export default App;
