import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css'
export const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#dcc8f3"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        
      />
    </div>
  );
};