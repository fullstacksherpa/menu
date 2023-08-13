import React, {useState} from 'react';
import Menu from './Menu';
import items, {MenuType}from './data';
import Categories from './Categories';


const allCategories = ['all', ...new Set(items.map((item)=>item.category))];

function App() {
  const [menuItems, setMenuItems] = useState<MenuType[]>(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category:string):void=>{
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item)=>item.category ===category)
    setMenuItems(newItems)
  }


  return (
    <main>
      <section className="py-20 px-0 section">
        <div className="text-center mb-8">
          <h2 className='font-bold text-5xl mb-3'>Our Menu</h2>
          <div className="w-20 h-2 bg-[#c59d5f] mx-auto"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
