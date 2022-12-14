import React, { useState } from 'react';
import PropTypes from 'prop-types';


function AddCategory({ setCategorias }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [ inputValue,...cats]);
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}

            />
        </form>

    );
}

export default AddCategory;

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired

}