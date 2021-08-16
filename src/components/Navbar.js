import React,{useContext} from 'react';

import {BookContext} from '../contexts/BookContext';




const Navbar=()=>{
    const {books}=useContext(BookContext);
    return (
        <div className="navbar">
             <h1>MerveteM Kitap Listesi</h1>
             <p> {books.length} adet kitap var</p>

        </div>

    )
}
export default Navbar;