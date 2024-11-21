
import Country from "./country";

//LOGICA PARA PINTAR TODOS LOS PAISES

function ListCountries({ countryList }) {

    console.log(countryList)

    const countriesItems = countryList.map((countryItem, index) => {
        return <Country countryD={countryItem} key={index} />

    })

    return (
        <section>
            <ul>{countriesItems}</ul>
        </section>
    )
}

export default ListCountries
