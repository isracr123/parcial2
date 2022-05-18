import React from 'react';

const Link = (props) => {


  return (
    <div className='space-y-3'>
      <div className='text-lg font-medium text-white dark:text-slate-200 text-center'>
        Nombre:{props.name} 
      </div>
      <div className='text-lg font-medium text-white dark:text-slate-200 text-center'>
        Puerto:{props.home}
      </div>
      <div className='text-center'>
        <img src={props.image} alt={"img"} className='object-contain h-80 w-full'/>
      </div>
    </div>
  );
};

export default Link;