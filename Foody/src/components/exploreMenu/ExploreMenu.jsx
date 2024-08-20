import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu( {category, setCategory} ) {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1 className='capitalize'>Explore our menu</h1>
        <p>Discover flavor-packed dishes at Foody. From savory to sweet, our menu delights every craving. Bon appétit!</p>
        <div className="explore-menu-list">
            {menu_list.map( (item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev===item.menu_name ? "All" : item.menu_name)} key={index} className={ category==item.menu_name ? "explore-menu-list-item col active" : "explore-menu-list-item col"}>
                        <img src={item.menu_image} alt={item.menu_name} />
                        <span className="item-name">{item.menu_name}</span>
                    </div>
                )
            } )}
        </div>
        <hr />
    </div>
    )
}


export default ExploreMenu