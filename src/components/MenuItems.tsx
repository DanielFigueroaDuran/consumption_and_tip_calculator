import React from 'react'
import { MenuItems } from '../types';

type MenuItemsProps = {
      item: MenuItems,
      addItem: () => void
}

const MenuItems = ({ item, addItem }: MenuItemsProps) => {
      const { id, name, price } = item;

      return (
            <button
                  className='border border-teal-400 w-full flex items-center justify-between p-3 hover:bg-teal-200'
                  onClick={() => addItem()}
            >
                  <p className="">{name}</p>
                  <p className="font-black">$ {price}</p>
            </button>
      )
}

export default MenuItems