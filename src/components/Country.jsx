
//necesita acceder a la info del objeto



function Country({ countryD }) {


    return (
        <li>
            <p>{countryD.flag}</p>
            <h3>{countryD.name.common}</h3>
            <p>{countryD.capital}</p>
            <p>{countryD.continents}</p>
        </li>
    )
}

export default Country
