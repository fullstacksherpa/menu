import React from 'react'
import {MenuType} from './data'

type MenuProps ={
    items: MenuType[];
}
const Menu:React.FC<MenuProps> = ({items}) => {
  return (
    <div className='w-[90vw] my-0 mx-auto max-w-5xl grid grid-cols-2 gap-x-8 gap-y-12'>
        {items.map((menuitem)=>{
               const {id, title, img, desc, price} = menuitem;
               return (
                <article key={id} className='grid grid-cols-2 gap-x-4 gap-y-8 max-w-[25rem]'>
                  <img src={img} alt={title} className='cover h-[200px] w-full border-[0.25rem] border-[#c59d5f] border-solid rounded-md block' />
                  <div className='item-info'>
                    <header className='flex justify-between border-b-[0.5px] border-dotted border-gray-500'>
                      <h4 className='mb-2'>{title}</h4>
                      <h4 className='text-[#c59d5f]'>${price}</h4>
                    </header>
                    <p className='mb-0 pt-4'>{desc}</p>
                  </div>
                </article>
              );
        })}
      
    </div>
  )
}

export default Menu
