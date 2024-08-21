import React from 'react'

const Navbar = ({ filterItem, uniqueList }) => {
    return (
        <>
            <nav className="navbar">
                <div className='btn-group'>
                    {uniqueList.map((curELem) => {
                        return (
                            <button className='btn-group__item' onClick={() => filterItem(curELem)}>{curELem}</button>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}

export default Navbar
