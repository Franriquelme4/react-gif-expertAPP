import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
        console.log('');
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputValue);
        if (inputValue) {
            setCategories(cat => [inputValue,...cat]);
            setInputValue('');
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}

                />
        </form>
    
    );
}
 AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
 }
export default AddCategory;