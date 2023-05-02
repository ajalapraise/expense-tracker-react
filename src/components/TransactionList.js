import React, { useContext } from 'react'
import { Transaction } from './Transaction'

import { GlobalContext } from '../context/GlobalState'


export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <>
            <h1>History</h1>
            <ul className='list'>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}

            </ul>
        </>
    )
}
