import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3'
                 type="search" 
                 placeholder='Search Any Client' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
