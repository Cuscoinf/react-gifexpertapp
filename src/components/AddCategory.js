import React, { useState } from 'react'
import propTypes from 'prop-types'

export const AddCategory = ({setCategories, categories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim().length > 2)
            setCategories([inputValue, ...categories]);
            setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Category</h2>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}
                />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}