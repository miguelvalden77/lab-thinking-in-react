import { useState } from "react"


function SearchBar({searchFunction, chekFunction}) {

  const [search, setSearch] = useState("")
  const [check, setChecked] = useState(false)

  const handleCheck = () => {
    check === true ? setChecked(false) : setChecked(true)
    chekFunction(check)
  }
  
  const handleSearch = evt => {
    setSearch(evt.target.value)
    searchFunction(search)
  }
  return (
    <div>
      <form>
        <input onChange={handleSearch} type="text" name='search' value={search}/>

        <label htmlFor="check">Only products in stock</label>
        <input type="checkbox" name="check" onChange={handleCheck} checked={check} />
      </form>
    </div>
  )
}

export default SearchBar