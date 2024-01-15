import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchButton = () => {
  return (
    <div className='fixed right-24 text-3xl top-10 -z-10 md:z-50'>
       <CiSearch />
    </div>
  )
}

export default SearchButton;
