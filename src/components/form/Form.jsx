import React from 'react';
import css from './form.module.css'
import propTypes from 'prop-types';
export const Form=({onSubmit})=>{
    const handleSubmit=e=>{
        e.preventDefault();
        const query = e.target.elements.searchInput.value.trim();
        onSubmit(query);
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <input name="searchInput" type="text" placeholder='Input a movie name' className={css.formInput}></input>
            <button type='submit' className={css.formButton}>Search!</button>
        </form>
    )
}
Form.propTypes={
    onSubmit:propTypes.func.isRequired
}