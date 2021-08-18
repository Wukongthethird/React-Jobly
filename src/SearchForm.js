import React, {useState} from "react";
import axios from "axios";

function SearchForm({initialSearch, handleSearch}){

  const[search, setSearch] = useState(initialSearch)

  function handleChange(evt){

    const { name, value } = evt.target;
    setSearch(sData => ({
      ...sData,
      [name]: value
    }));
  }

  function handleSubmit(evt){
    evt.preventDefault()
    handleSearch({...search})
  }

  function titleOrName() {}

  return (
    <div className="Search">
      <form className="Search-bar" onSubmit={handleSubmit}>
          <input 
             id="search-bar-query"
             name="name"
             className="form-control"
             placeholder="Title"
             onChange={handleChange}
             value={search.name}
          />
      </form>
    </div>
  )
}

export default SearchForm;