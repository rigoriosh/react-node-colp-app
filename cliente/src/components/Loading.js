import React from 'react'

export const Loading = () => {
    return (
        <div className="spinner-grow mt-5" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
