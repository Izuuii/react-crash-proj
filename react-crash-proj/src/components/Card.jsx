import React from 'react'

// Children is a built-in prop that represents the inner content between opening and closing tags of a component.
// - Lets components accept and render nested elements.
const Card = ({ children, bg = 'bg-gray-100' }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card