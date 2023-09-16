import SearchBar from "../SearchBar/SearchBar";
import React from "react";
const Nav = ({onSearch}) =>{
    return (
        <>
            <SearchBar onSearch={onSearch} />
        </>
    )
}

export default Nav;
