import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    /*const handAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
        //setCategories(cats=>[...cats, 'HunterXHunter'])
    }*/

    return (
        <>
            <h2>Gif Expert</h2>
            <hr />
            <AddCategory setCategories={setCategories} categories ={categories} />

            {
                categories.map(category=>{
                    return <GifGrid key={category} category={category}/>
                })
            }

        </>
    )
}
