import React from 'react'

const MenuItems = ({ menu }) => {
      console.log(menu);
      return (
            <div key={menu.id}>MenuItems</div>
      )
}

export default MenuItems