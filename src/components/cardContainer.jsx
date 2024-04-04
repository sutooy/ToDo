import React, { ReactNode } from 'react'



function Card({ children, className }) {
    return (
        <div className={`${className} p-3 rounded-lg  `}
            style={{
                boxShadow: '2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff'
            }}
        >
            {children}
        </div>
    )
}

export default Card