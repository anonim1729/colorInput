const colorInput = ({ search, setSearch }) => {
    return (
        <input
            className="colorinput"
            type="text"
            id='search'
            placeholder="Type Color"
            role="searchbox"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    )
}

export default colorInput
