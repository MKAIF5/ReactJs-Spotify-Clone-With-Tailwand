import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumsItems from './AlbumsItems'

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Features Charts</h1>
                <div className='flex overflow-auto'>
                    {
                        albumsData.map((val, i) => (
                            <AlbumsItems
                                key={i}
                                name={val.name}
                                desc={val.desc}
                                id={val.id}
                                image={val.image}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome
