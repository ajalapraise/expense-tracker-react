import React from 'react'

export const TransactionList = () => {
    return (
        <>
            <h1>History</h1>
            <ul className='list'>
                <li className='minus'>
                    cash <span>-$400</span><button className='delete-btn'>x</button>
                </li>
            </ul>
        </>
    )
}
