import React from 'react'

type CategoriesProps ={
    categories: string[];
    filterItems: (category:string)=>void;
}

const Categories:React.FC<CategoriesProps> = ({categories, filterItems}) => {
  return (
   <div className="mb-16 flex justify-center">
    {categories.map((category, index)=>{
              return(
                <button type='button' className='bg-transparent border-transparent text-base capitalize my-0 mx-2 tracking-wide py-2 px-3 text-[#c59d5f] cursor-pointer transition-all duration-300 ease-linear rounded-md hover:bg-[#c59d5f] hover:text-white' key={index} onClick={()=>filterItems(category)}>{category}</button>
              )
    })}
   </div>
  )
}

export default Categories
