import React from 'react'
import DisplayHome from './DisplayHome'
import { Route, Routes } from 'react-router-dom'
import DisplayAlbums from './DisplayAlbums'

const Display = () => {
    return (
        <>
            <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white
            overflow-auto lg:w-[75%] lg:ml-0'>

                <Routes>
                    <Route path='/' element={<DisplayHome />} />
                    <Route path='/album/:id' element={<DisplayAlbums />} />
                </Routes>
            </div>
        </>
    )
}

export default Display
