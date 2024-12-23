import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const DisplayAlbums = () => {

    const { id } = useParams();

    const albumDataResponse = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

    return (
        <>
            <Navbar />

            <div className='mt-10 flex flex-col gap-8 md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumDataResponse.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl
                    '>{albumDataResponse.name}</h2>
                    <h4>{albumDataResponse.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5'
                            src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        . 1,323,154 likes
                        . <b>50 songs,</b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2
             text-[#a7a7a7]'>
                <p className='mr-4'><b>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((val, i) => (
                    <div
                        onClick={() => {
                            playWithId(val.id)
                        }}
                        key={i}
                        className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2
                     items-center text-[#a7a7a7 hover:bg-[#ffffff26] cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{i + 1}</b>
                            <img className='inline w-10 mr-5' src={val.image} alt="" />
                            {val.name}
                        </p>
                        <p className='text-[15px]'>{albumDataResponse.name}</p>
                        <p className='text-[15px] hidden sm:block'>5 Days Ago</p>
                        <p className='text-[15px] text-center'>{val.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default DisplayAlbums
