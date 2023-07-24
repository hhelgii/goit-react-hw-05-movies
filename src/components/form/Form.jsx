import React from 'react';
import propTypes from 'prop-types';
export const Form=({onSubmit})=>{
    const handleSubmit=e=>{
        e.preventDefault();
        const query = e.target.elements.searchInput.value.trim();
        onSubmit(query);
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="searchInput" type="text"></input>
            <button type='submit'>search</button>
        </form>
    )
}
Form.propTypes={
    onSubmit:propTypes.func.isRequired
}