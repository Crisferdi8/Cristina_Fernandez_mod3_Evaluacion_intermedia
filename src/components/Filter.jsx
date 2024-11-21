



function Filter({ onChangeFilter }) {

    const handleChange = (ev) => {

        onChangeFilter(ev.target.value);
    }


    return (
        <form >
            <label htmlFor="search">Buscar:</label>
            <input id="search" type="text" onChange={handleChange} />

        </form>
    )
}

export default Filter