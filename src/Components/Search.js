import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({ search, onChange }) {

    return (

        // <div className='flex justify-between items-center sm:w-full sm:gap-2 md:w-full md:gap-2 xl: full'>
            <div className="h-9 w-4/5 border-2 rounded-2xl my-6 pl-3 pt-1 bg-gray-100 sm:w-full
             sm:ml-24 md:w-3/4 ml-28 xl:w-3/4 xl:ml-36">
                <SearchRoundedIcon />
                <input type="text"
                style={{outline: 'none'}}
                    className='bg-transparent pl-1 w-4/5' placeholder='Search'
                    value={search}
                    onChange={onChange}
                />
            </div>

        // </div>

    )
}

export default Search
