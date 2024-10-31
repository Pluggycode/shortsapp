import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({onUserSelect}) {

    const styleOptions = [
        {
            name :'realistic',
            image : '/realistc.jpg'
        },
        {
            name :'Catroon',
            image : '/cartoon.jpg'
        },
        {
            name :'Comic',
            image : '/comic.jpg'
        },
        {
            name :'WaterColor',
            image : '/watercolor.jpg'
        },
        {
            name:"GTA",
            image : '/gta.jpg'
        }
        
    ]

    const [selectedOption,setSelectedOption] = useState();
  return (
    <div className='mt-7'>
         <h2 className='font-bold text-2xl text-primary'>Style</h2>
         <p className='text-gray-500'>Select Your Video Type</p>
         <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-6 gap-5 mt-3">
            {styleOptions.map((item,index) => (
                <div className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl ${selectedOption==item.name && 'border-4 border-primary'}`}>
                    <Image src={item.image} width={100} height={100} className='h-48 object-cover rounded-lg w-full'  
                    onClick={() => {
                        setSelectedOption(item.name) 
                        onUserSelect('imageStyle',item.name)}}/>
                    <h2 className={`absolute p-1 bg-black text-white bottom-0 w-full text-center rounded-b-lg ${selectedOption==item.name && 'border-4'}`}>{item.name}</h2>
                </div>
            ))}
         </div>
    </div>
  )
}

export default SelectStyle