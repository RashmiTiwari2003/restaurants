import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((curELem) => {
    return curELem.category
})),"All"]

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu)

    const filterItem = (category) => {
        if (category==="All")
        {
            return setMenuData(Menu)
            
        }
        const updatedList = Menu.filter((curELem) => {
            return curELem.category === category;
        })

        setMenuData(updatedList)
    }

    return (
        <>
            <Navbar filterItem={filterItem} uniqueList={uniqueList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
