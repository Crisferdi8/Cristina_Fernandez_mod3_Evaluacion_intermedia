import "../scss/App.scss";
import countryData from "../services/data.json"
import ListCountries from "./listCountries";
import Filter from "./Filter";
import { useState } from "react";
import "../scss/layout/container.scss"

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
        <> <header className="container">
            <h1>Country Info App.
            </h1>
            <p>Explore information about countries, capitals and flags.Add countries and filter trough the list </p>
        </header>
            <main>
                <Filter onChangeFilter={changeSearch} />
                <ListCountries countryList={filteredCountries} />
            </main>
        </>

    )
}

export default App
