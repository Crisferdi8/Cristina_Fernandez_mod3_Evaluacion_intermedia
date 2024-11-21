import "../scss/App.scss";
import countryData from "../services/data.json"
import ListCountries from "./listCountries";
import Filter from "./Filter";
import { useState } from "react";

function App() {
    const [searchValue, setSearchValue] = useState("");
    //LIFTING
    const changeSearch = (value) => {
        setSearchValue(value);
    }
    //FILTRAR con lo que escribe la usuaria 
    const filteredCountries = countryData.filter((countryItem) => {
        return countryItem.name.common.toLowerCase().includes(searchValue.toLowerCase());

    })

    return (
        <> <header>
            <h1>Country Info App.
            </h1>
        </header>
            <main>
                <Filter onChangeFilter={changeSearch} />
                <ListCountries countryList={filteredCountries} />
            </main>
        </>

    )
}

export default App
